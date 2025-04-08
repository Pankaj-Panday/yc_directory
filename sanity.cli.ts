/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/

/*
  Yeh file Sanity CLI (command-line interface) ke configuration ke liye hoti hai.
  CLI commands run karte waqt Sanity ko bataata hai ki kaunsa project use karna hai.
  Jab bhi tum CLI commands (sanity start, sanity deploy, etc.) run karoge, yeh file project ID aur dataset set karegi.
*/


import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
