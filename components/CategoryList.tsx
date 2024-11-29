"use client"

import { useState, useEffect } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "@/lib/firebase"


interface Category {
  id: string
  name: string
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categorias"), (snapshot) => {
      const categoryList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Category[]
      setCategories(categoryList)
    })

    return () => unsubscribe()
  }, [])

  return (
    <ul className="list-disc pl-5">
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  )
}

