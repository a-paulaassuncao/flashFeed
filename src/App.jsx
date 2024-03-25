import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

import styles from './app.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ana Paula Assunção"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis, totam, vitae aliquam rerum eligendi provident, vero consectetur quisquam ex nisi? Quaerat maiores et alias labore autem error modi deserunt!"
          />
          <Post
            author="Pamela Costa"
            content="Um novo post muito legal"
          />
          </main>
      </div>
    </div>
  )
}


