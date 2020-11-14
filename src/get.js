import axios from "axios";

const get = async (url, params) => {
  const key = url + (params.page || "");
  const stData = sessionStorage.getItem(key);

  if (stData) return JSON.parse(stData);

  const data = await axios.get(url, { params }).then((res) => res.data);
  sessionStorage.setItem(key, JSON.stringify(data));

  return data;
};

export default get;
