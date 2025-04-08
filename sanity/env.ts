/* 
Yeh file Sanity ke environment variables ko manage karti hai.
Yeh file .env file se values fetch karti hai, jese ki
  - SANITY_PROJECT_ID
  - SANITY_DATASET
  - SANITY_API_TOKEN
*/

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-04-02";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = process.env.SANITY_WRITE_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
