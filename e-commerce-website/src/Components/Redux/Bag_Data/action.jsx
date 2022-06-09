export const BAG_DATA = "BAG_DATA";
export const REMOVE_DATA = "REMOVE_DATA";

export const bagData = (payload) => ({type:BAG_DATA, payload});
export const removeData = (payload) => ({type:REMOVE_DATA, payload});
