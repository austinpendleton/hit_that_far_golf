export const base_url = "http://localhost:3003";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getclubsList = () => {
  return fetch(`${base_url}/mybag`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
};

export const addclubs = ({ clubs }) => {
  return fetch(`${base_url}/mybag`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clubs,
    }),
  }).then(processServerResponse);
};
