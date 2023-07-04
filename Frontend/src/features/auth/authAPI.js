const BASE_URL = "http://localhost:3000"
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/v1/signup/basic`,  {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json','x-api-key':"GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj"  },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/v1/login/basic`, {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json','x-api-key':"GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/check`);
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}


export function signOut(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/logout`);
      if (response.ok) {
        resolve({ data:'success' });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      console.log(error)
      reject( error );
    }
  });
}


export function resetPasswordRequest(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/reset-password-request`, {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: { 'content-type': 'application/json', 'x-api-key':"GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}

export function resetPassword(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/reset-password`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json','x-api-key':"GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

  });
}
