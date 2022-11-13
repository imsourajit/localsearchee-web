import axios from "axios";
import store from "../Store/store";

export const ApiManager = {
  userId: null,

  apiStart: label => ({
    type: `${label}_START`,
  }),

  apiEnd: label => ({
    type: `${label}_END`,
  }),

  apiFailure: (label, err) => ({
    type: `${label}_FAILURE`,
    error: err,
  }),

  apiSuccess: (label, data) => ({
    type: `${label}_SUCCESS`,
    data,
  }),

  setDefaultConfig: () => {

    axios.defaults.baseURL = "http://localhost:3003";
    axios.defaults.headers.common["Content-Type"] = "application/json";

  },

  apiCall: async (
    dispatch,
    method,
    label,
    services,
    url,
    params = {},
    onSuccess = () => {},
    onFailure = () => {},
    // eslint-disable-next-line no-unused-vars
    extraParams = {},
    headers= {},
  ) => {
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    ApiManager.setDefaultConfig(); //set common parameters

    store.dispatch(ApiManager.apiStart(label));

    axios
      .request({
        url,
        method,
        headers,
        [dataOrParams]: params,
      })
      .then(res => {
        const {data} = res;
        store.dispatch(ApiManager.apiSuccess(label, data));
        onSuccess(data);
      })
      .catch(error => {
        store.dispatch(ApiManager.apiFailure(label, error));
        onFailure(error);

        if (error.response && error.response.status === 401) {
          store.dispatch({
            type: "LOGOUT",
          });
        }
      })
      .finally(() => {
        if (label) {
          store.dispatch(ApiManager.apiEnd(label));
        }
      });
  },
};

export default ApiManager;
