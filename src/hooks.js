import {useState} from 'react';
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = (current) => {
    const [state, setState] = useState(current = true);
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard];
};

const useAxios = () => {
    const [currentData, setData] = useState([]);
    /** this is not a great component as it is not universally functional.
     * Rather, it is specific to the two Components that call it.
     * But, time is short, and I need to keep moving forward.
     * Its working and that's good enough!
     */
  
    const checkUrl = (str) => {
        // Function to check what is being passed in as an argument
      if (str && typeof str === "string" && str.startsWith("http")) {
        return str;
      }
      // Fallback URL if "url" is not an absolute URL
      return `https://pokeapi.co/api/v2/pokemon/${str}`;
    };
  
    const addCard = async (str) => {
        // Function to add a new card to the collection alread in state.
      try {
        // Process the URL
        const processedUrl = checkUrl(str);
  
        // Fetch data using axios
        const response = await axios.get(processedUrl);
  
        // Update the state with the new data
        setData((data) => [...data, { ...response.data, id: uuid() }]);
      } catch (err) {
        console.error("There was an error adding a card:", err);
      }
    };
  
    return [currentData, addCard];
  };

export { useFlip, useAxios };