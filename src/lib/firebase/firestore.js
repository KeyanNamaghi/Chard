import { collection, getDocs, onSnapshot } from 'firebase/firestore'

import { db } from './firebase'

// function applyQueryFilters(q, { category, city, price, sort }) {
//   if (category) {
//     q = query(q, where('category', '==', category))
//   }
//   if (city) {
//     q = query(q, where('city', '==', city))
//   }
//   if (price) {
//     q = query(q, where('price', '==', price.length))
//   }
//   if (sort === 'Rating' || !sort) {
//     q = query(q, orderBy('avgRating', 'desc'))
//   } else if (sort === 'Review') {
//     q = query(q, orderBy('numRatings', 'desc'))
//   }
//   return q
// }

// export async function getTest(filters = {}) {
//   let q = query(collection(db, 'testing'))

//   console.log('GET TEST')
//   console.log(q)

// //   q = applyQueryFilters(q, filters)
//   const results = await getDocs(q)
//   console.log(results)
//   return results.docs.map(doc => {
//     return {
//       id: doc.id,
//       ...doc.data(),
//       // Only plain objects can be passed to Client Components from Server Components
//       timestamp: doc.data().timestamp.toDate(),
//     }
//   })
// }

export async function getTest(filters = {}) {
  const collectionRef = collection(db, 'testing')

  console.log('GET TEST')
  console.log()

  //   q = applyQueryFilters(q, filters)
  const results = await getDocs(collectionRef)
  console.log(results)

  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      // Only plain objects can be passed to Client Components from Server Components
      //   timestamp: doc.data().timestamp.toDate(),
    }
  })
}

export const watchTesting = (cb) => {
  return onSnapshot(collection(db, 'testing'), (doc) => {
    const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
    const data = doc.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    console.log(data)
    cb(data)
  })
}
