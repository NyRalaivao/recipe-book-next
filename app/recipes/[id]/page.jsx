import Link from 'next/link'
import recipes from '../../../data/recipes.json'
import styles from './page.module.css'

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }))
}

export default async function RecipePage({ params }) {

  const { id } = await params

  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <div className={styles.container}>
        <p>Recipe not found.</p>
        <Link href="/" className={styles.back}>← Back to recipes</Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.back}>← Back to recipes</Link>

      <img
        className={styles.image}
        src={recipe.image}
        alt={recipe.name}
      />

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.badge}>{recipe.category}</span>
          <span className={styles.duration}>⏱ {recipe.duration} min</span>
        </div>

        <h1 className={styles.title}>{recipe.name}</h1>

        <section>
          <h2 className={styles.sectionTitle}>Ingredients</h2>
          <ul className={styles.ingredientList}>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className={styles.ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Steps</h2>
          <ol className={styles.stepList}>
            {recipe.steps.map((step, index) => (
              <li key={index} className={styles.step}>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}