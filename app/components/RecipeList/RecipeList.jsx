'use client'

import { useState } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './RecipeList.module.css'

export default function RecipeList({ recipes }) {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes)

  return (
    <div>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOrderedRecipes((prev) => [...prev].reverse())}
        >
          Reverse order
        </button>
      </div>

      <ul className={styles.list}>
        {orderedRecipes.map((recipe) => (
          <li key={recipe.id} className={styles.item}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  )
}