import { HttpI } from "@/domain/ports";
import axios from "axios";

export const AxiosAdapter: HttpI = {
  async get(path, config) {
    const { data } = await axios.get(path, config);

    return data;
  },
  async post(path, params?, config?) {
    const { data } = await axios.post(path, params, config);

    return data;
  },
  async put(path, params?, config?) {
    const { data } = await axios.post(path, params, config);

    return data;
  },
  async delete(path, config?) {
    const { data } = await axios.delete(path, config);

    return data;
  },
};
