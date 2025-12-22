import requests from "../data/requests";


export const getRequests = () => {
  return requests;
};


export const updateRequestStatus = (id, newStatus) => {
  const request = requests.find((r) => r.id === id);
  if (request) {
    request.status = newStatus;
  }
};
