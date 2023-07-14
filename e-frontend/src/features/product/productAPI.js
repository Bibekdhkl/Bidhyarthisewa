const BASE_URL = "http://localhost:3000";

export function fetchAllProducts(pageNumber, pageItemCount) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    //`${BASE_URL}/products/` -> 'http://localhost:8080/products/
    const response = await fetch(
      `${BASE_URL}/v1/product?pageNumber=${pageNumber}&pageItemCount=${pageItemCount}`,
      {
        headers: {
          "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
          authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlLWNvbW1lcmNlLmNvbSIsImF1ZCI6ImUtY29tbWVyY2UuY29tIiwic3ViIjoiNjRhNDViMjg1ZTY5NjAzMGM0MjBlMTc1IiwiaWF0IjoxNjg4NTMzMDcwLCJleHAiOjE2OTg5MDEwNzB9.F6G-csnBukkS6MGJU0pkTnE9BdiwVCa7vsm2V_2MQWxBeZKq8YGfeHtpBy1BaCrX8ssJVetCkGlnIWcwW5NioAbwvchmHxY9UFTgO9oJ4oXc4NMIlIBikFoQPRydjUc6Va-wGVXoIuyPaT2EFcRcaYM_9X3pnzIHzl-2sfT8qdc",
        },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    //`${BASE_URL}/products/` -> 'http://localhost:8080/products/
    const response = await fetch(`${BASE_URL}/v1/product/` + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    // const response = await fetch('http://localhost:8080/products/', {
    const response = await fetch(`${BASE_URL}/v1/product/`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
        "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${BASE_URL}/v1/product/` + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
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

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  // TODO : on server we will support multi values in filter
  // TODO : Server will filter deleted products in case of non-admin

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:3000/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/v1/category",
    {
      headers: {
        "x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj",
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlLWNvbW1lcmNlLmNvbSIsImF1ZCI6ImUtY29tbWVyY2UuY29tIiwic3ViIjoiNjRhNDViMjg1ZTY5NjAzMGM0MjBlMTc1IiwiaWF0IjoxNjg4NTMzMDcwLCJleHAiOjE2OTg5MDEwNzB9.F6G-csnBukkS6MGJU0pkTnE9BdiwVCa7vsm2V_2MQWxBeZKq8YGfeHtpBy1BaCrX8ssJVetCkGlnIWcwW5NioAbwvchmHxY9UFTgO9oJ4oXc4NMIlIBikFoQPRydjUc6Va-wGVXoIuyPaT2EFcRcaYM_9X3pnzIHzl-2sfT8qdc",
      },
      }
      );
    const data = await response.json();
    resolve({ data });
  });
}

// export function fetchBrands() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:3000/brands");
//     const data = await response.json();
//     resolve({ data });
//   });
// }
