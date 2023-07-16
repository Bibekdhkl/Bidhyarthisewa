const BASE_URL = "http://localhost:3000";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/v1/signup/basic`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
        "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
      },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log("Message")
      const response = await fetch(`${BASE_URL}/v1/login/basic`, {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "content-type": "application/json",
          "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
        },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    // TODO: on server it will only return some info of user (not password)
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      // 'http://localhost:8080/auth/check'
      const response = await fetch(`${BASE_URL}/v1/check/basic`, {
        "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }

    // TODO: on server it will only return some info of user (not password)
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
