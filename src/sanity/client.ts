import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Dataset
  useCdn: false,                                       // Disable CDN for writing
  apiVersion: '2023-01-01',                            // Adjust to your API version
  token: process.env.SANITY_API_TOKEN                  // API Token
});

export default client;
