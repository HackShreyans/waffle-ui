
import {
  DATA_LIST_REQUEST,
  DATA_LIST_FAIL,
  DATA_LIST_SUCCESS,
} from "../constants/dataConstant";


// export const listNotes = () => async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: NOTES_LIST_REQUEST,
//       });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };

//       const { data } = await axios.get(`/api/notes`, config);

//       dispatch({
//         type: NOTES_LIST_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       dispatch({
//         type: NOTES_LIST_FAIL,
//         payload: message,
//       });
//     }
//   };
var data ={
  name: "shreyans",
  lastName: "mishra",
  Age: 25,
  email: "shreyanspandit030@gmail.com"
}


export const dataList = () => async (dispatch, getstate) => {
 
  try {
    dispatch({
      type: DATA_LIST_REQUEST,
    });
    dispatch({
               type: DATA_LIST_SUCCESS,
                payload: data,
             });

  } catch (error) {}
};
