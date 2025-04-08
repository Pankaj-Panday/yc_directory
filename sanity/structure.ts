/*
Yeh file Sanity Studio ke sidebar (CMS panel) ka structure define karta hai.
Isme tum decide karte ho ki kaunse sections ya collections sidebar me dikhne chahiye
*/

import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("startup").title("Startups"),
      S.documentTypeListItem("playlist").title("Playlists"),
    ]);
