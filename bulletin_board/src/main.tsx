import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './routes/Home.tsx'
import NewPage from './routes/NewPost.tsx'
import Post from './routes/Post.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/new-post",
        element: <NewPage />
      },
      {
        path: "post/:id",
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
