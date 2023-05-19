import data from './cal.json'
export default defineEventHandler(() => {
  return {
    data: {
      name: 'Murphy',
      version: '1.0.0',
      ...data
    },
  }
})


