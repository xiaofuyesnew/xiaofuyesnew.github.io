import { addCollection } from '@iconify/vue'
// import ep from '@iconify/json/json/ep.json'

// add iconify json data here
export const collections = []

export const registerIconify = () => {
  collections.forEach(collection => {
    addCollection(collection)
  })
}
