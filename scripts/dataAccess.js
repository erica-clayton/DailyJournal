const applicationState = {
    entries: [],
};

const API = "http://localhost:8088"

export const fetchEntries = async () => {
  const dataFetch = await fetch(`${API}/entries`)
  const journalEntries = await dataFetch.json()
  // Store the external state in application state
  applicationState.entries = journalEntries;
};

export const getJournalEntries = () => {
  return applicationState.entries.map((x) => ({...x}))
};

export const addNewEntry = async (entry) => {
  const fetchEntries = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry),
  };

  const response = await fetch(`${API}/entries`, fetchEntries);
  const responseJson =await response.json();
 
  return responseJson;
};



  