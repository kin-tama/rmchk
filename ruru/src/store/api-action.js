import { loadData } from "./action";
  
  export const getData = () => (dispatch, _getState, api) => (
    api.get(`/users`)
    .then(({data}) => dispatch(loadData(data)))
    .catch((e) => {console.log(e)})
  );
  