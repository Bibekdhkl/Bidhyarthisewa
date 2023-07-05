const BASE_URL = "http://localhost:3000";

export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`${BASE_URL}/orders/own/`) 
    const data = await response.json()
    resolve({data})
  }
  );
}

// (`${BASE_URL}/orders/own/`
export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`${BASE_URL}/users/own/`) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/users/`+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json', "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


