import { HttpI } from "@/domain/ports";

export const FetchAdapter: HttpI = {
  async get(path, config) {
    const response = await fetch(path, {
      method: "GET",
      headers: config?.headers,
    });

    const data = await response.json();

    return data;
  },
  async post(path, params?, config?) {
    const response = await fetch(path, {
      method: "POST",
      headers: config?.headers,
      body: params as undefined,
    });

    const data = await response.json();

    return data;
  },
  async put(path, params?, config?) {
    const response = await fetch(path, {
      method: "PUT",
      headers: config?.headers,
      body: params as undefined,
    });

    const data = await response.json();

    return data;
  },
  async delete(path, config?) {
    const response = await fetch(path, {
      method: "DELETE",
      headers: config?.headers,
    });

    const data = await response.json();

    return data;
  },
};
