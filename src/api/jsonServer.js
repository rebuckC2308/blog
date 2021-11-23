import axios from "axios";

export default axios.create({
  baseURL: "http://322b-2600-6c40-7f7f-c43b-5849-f634-7254-512f.ngrok.io",
  //baseURL needs to be updated every time ngrok is restarted
});
