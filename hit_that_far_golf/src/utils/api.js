export const base_url = "http://localhost:3001";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getclubsList = () => {
  return fetch(`${base_url}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
};

export const addclubs = ({ name, yards, imageUrl }, token) => {
  return fetch(`${base_url}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      yards,
      imageUrl,
    }),
  }).then(processServerResponse);
};

export const signUp = ({ name, email, password }) => {
  return fetch(`${base_url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(processServerResponse);
};
