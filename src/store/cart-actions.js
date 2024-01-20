import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = ()=>{
  return async (dispatch) =>{
    const fetchHandler = async()=>{
      const res = await fetch(
        "https://redux-shopping-cart-e943f-default-rtdb.firebaseio.com/cartItems.json",{
          method:'GET'
        }
      );
      const data = await res.json();
      return data;
    }

    try{
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData))
    } catch(error){
      // send state as error
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Unable to fetch data",
          type: "error",
        })
      );
    }
  }
}
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      //send state as sending request

      const res = await fetch(
        "https://redux-shopping-cart-e943f-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      // send state as request successfull
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Send Request to DB successfully",
          type: "success",
        })
      );

      return data;
    };

    try {
      await sendRequest();
    } catch (error) {
      // send state as error
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
