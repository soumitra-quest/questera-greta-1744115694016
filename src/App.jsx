import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}