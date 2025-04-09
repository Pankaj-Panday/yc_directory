/*
Yeh file Sanity se data fetch karne ke liye ek client setup karti hai.
Isko Next.js ke components me use karke CMS se data le sakte ho.
*/

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
