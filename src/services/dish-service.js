import dishCollection from "./dish-collection";

export async function getDishes() {
  const data = await dishCollection(`/products`);
  return data;
}

export async function showDish(id) {
  const data = await dishCollection(`/products/${id}`);
  return data;
}

export async function editDish(id, newData) {
  return await dishCollection(`/products/${id}`, {
    method: "PATCH",
    body: newData,
  });
}
