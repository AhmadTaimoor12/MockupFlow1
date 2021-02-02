import Axios from "axios";
export default function Api(
  type = "get",
  url,
  payload = {},
  errorCallBack,
  successCallBack
) {
  Axios({
    method: type,
    url: url,
    headers: {
      Authorization: `Bearer ${atob(localStorage.getItem("authenticated"))}`,
      Accept: "application/json",
    },
  })
    .then((res) => successCallBack(res))
    .catch((error) => errorCallBack(error));
}
