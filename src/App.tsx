import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import './global.css'

import styles from './App.module.css'

export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface Post {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dgpimenta.png',
      name: 'Daniel Pimenta',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala, devs! 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}        
                    
    ],
    publishedAt: new Date('2022-12-12 18:20:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala, devs! 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}        
                    
    ],
    publishedAt: new Date('2022-12-07 20:20:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala, devs! 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}        
                    
    ],
    publishedAt: new Date('2022-12-02 22:30:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />     
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}


