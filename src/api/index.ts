import axios from "axios";
import urljoin from "url-join";

const baseUrl = "https://api.chucknorris.io/jokes";

export async function getCategories(): Promise<string[]> {
  const request = axios.get(urljoin(baseUrl, "categories"));
  const categories = await (await request).data;
  return categories;
}

export async function getRandomCitate(): Promise<string> {
  const request = axios.get(urljoin(baseUrl, "random"));
  const randomCitate = await (await request).data.value;
  return randomCitate;
}

export async function getRandomCitateFromCategories(
  category: string
): Promise<string> {
  const request = axios.get(urljoin(baseUrl, `random?category=${category}`));
  const { data } = await request;
  const { value } = data;

  return value;
}
