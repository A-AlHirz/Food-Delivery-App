import instance from "./index";

const getAllcategories = async () => {
  const res = await instance.get("/category");
  return res.data;
};
const getAllresturants = async () => {
  const res = await instance.get("/resturant");
  return res.data;
};

const getResturant = async (id) => {
  const res = await instance.get(`/resturant/${id}`);
  return res.data;
};
const getResturantItems = async (id) => {
  const res = await instance.get(`/resturant/${id}/items`);
  return res.data;
};
const getItemDetails = async (id) => {
  const res = await instance.get(`/item/${id}`);
  return res.data;
};

export { getAllcategories, getAllresturants, getResturant, getResturantItems, getItemDetails };