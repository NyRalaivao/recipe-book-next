import recipes from '../data/recipes.json'
import styles from './page.module.css'
import RecipeList from '../app/components/RecipeList/RecipeList' 

export default function HomePage() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Recipe Book</h1>
      </header>
      <main className={styles.main}>
        <RecipeList recipes={recipes} />
      </main>
    </div>
  )
}