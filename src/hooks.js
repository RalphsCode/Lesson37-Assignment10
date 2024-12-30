import React, {useState, useEffect} from 'react';
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = (current) => {
    const [state, setState] = useState(current = true);
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard];
};

const useAxios = (url) => {
    const [currentData, setData] = useState([]);
  
    // Fix: Use "url" instead of "input"
    const checkUrl = (url) => {
      if (url && typeof url === "string" && url.startsWith("http")) {
        return url;
      }
      // Fallback URL if "url" is not an absolute URL
      return `https://pokeapi.co/api/v2/pokemon/${url}`;
    };
  
    const addData = async (name) => {
      try {
        // Process the URL
        const processedUrl = checkUrl(name);
  
        // Fetch data using axios
        const response = await axios.get(processedUrl);
  
        // Update the state with the new data
        setData((data) => [...data, { ...response.data, id: uuid() }]);
      } catch (err) {
        console.error("There was an error adding the data:", err);
      }
    };
  
    return [currentData, addData];
  };

export { useFlip, useAxios };