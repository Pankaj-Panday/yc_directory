/*
Yeh file Sanity me jo content types (database structure) honge, unko define karti hai.
Isme tum CMS me kaun kaunse models hone chahiye, yeh decide karte ho.
*/


import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startup } from './startup'
import { playlist } from './playlist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
}
