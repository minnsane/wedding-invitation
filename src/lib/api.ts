import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://minj-hearts-shwa-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export const getMain = async () =>
  await instance.get(`/main.json`).then((res) => res.data);
