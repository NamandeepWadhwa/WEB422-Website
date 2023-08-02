 // Import the getToken function from your Authenticate library
 import { getToken } from "@/lib/authenticate";

// Function to make authenticated requests to the API
const makeRequest = async (url, method, data) => {
  const token = await getToken(); // Get the JWT token using the getToken function

  try {
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `JWT ${token}`, // Include the Authorization header with the JWT token
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      return await response.json(); // If the operation was successful, return the data
    } else {
      return []; // If the operation was not successful, return an empty array
    }
  } catch (error) {
    console.error("Error making API request:", error);
    return []; // If there was an error, return an empty array
  }
};

// Function to add a movie to favorites
export const addToFavourites = async (id) => {
  return await makeRequest(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, "PUT");
};

// Function to remove a movie from favorites
export const removeFromFavourites = async (id) => {
  return await makeRequest(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, "DELETE");
};

// Function to get favorite movies
export const getFavourites = async () => {
  return await makeRequest(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, "GET");
};

// Function to add a movie to history
export const addToHistory = async (id) => {
  return await makeRequest(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, "PUT");
};

// Function to remove a movie from history
export const removeFromHistory = async (id) => {
  return await makeRequest(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, "DELETE");
};

// Function to get movie history
export const getHistory = async () => {
  return await makeRequest(`${process.env.NEXT_PUBLIC_API_URL}/history`, "GET");
};
