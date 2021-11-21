import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];

    case "delete_blogpost":
      return state.filter((blogpost) => blogpost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogpost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const deleteBlogpost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogpost, deleteBlogpost },
  []
);
