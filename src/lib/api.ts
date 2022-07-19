import axios from "axios";
import { appName } from "../shared/app.value";

const instance = axios.create({
  baseURL: `https://${appName}-default-rtdb.asia-southeast1.firebasedatabase.app`,
});

export const getMain = async () =>
  await instance.get(`/main.json`).then((res) => res.data);
