import { createClient } from 'contentful';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error("Missing VITE_CONTENTFUL_SPACE_ID or VITE_CONTENTFUL_ACCESS_TOKEN in environment variables");
}

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export default client;