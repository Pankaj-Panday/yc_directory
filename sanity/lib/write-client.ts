import "server-only"

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // it must be false for write operations
  token, 
})

if(!writeClient.config().token) {
  throw new Error("Sanity write client is not configured with a token. Please set the SANITY_API_TOKEN environment variable.")
}