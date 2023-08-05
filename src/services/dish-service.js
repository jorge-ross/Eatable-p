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

export async function newDish(newProduct) {
  return await dishCollection("/products", {
    method: "POST",
    body: newProduct,
  });
}

export async function deleteDish(id) {
  return await dishCollection(`/products/${id}`, {
    method: "DELETE",
  });
}
