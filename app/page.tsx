"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductList from '@/components/ProductList'
import CategoryList from '@/components/CategoryList'
import AddProductForm from '@/components/AddProductForm'
import AddCategoryForm from '@/components/AddCategoryForm'
import PrintButton from '@/components/PrintButton'
import Spinner from '@/components/Spinner'
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('productos');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleBeforePrint = async () => {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/signin');
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='flex flex-col items-center bg-gradient-to-r from-white via-red-200 to-white'>
        <div className='transform hover:scale-105 transition-transform duration-300'>
          <h1 className="text-[80px] font-bold italic text-blue-600 tracking-wider py-4">DISTRIBUIDORA LYR</h1>
        </div>
      </div>
      <main className="container mx-auto p-4">
        <div className="mb-4">
          <button onClick={() => setActiveTab('productos')} className={`mr-4 p-2 rounded-md ${activeTab === 'productos' ? 'font-bold bg-blue-500 text-white' : ''}`}>
            Productos
          </button>
          <button onClick={() => setActiveTab('categorias')} className={`p-2 rounded-md ${activeTab === 'categorias' ? 'font-bold bg-blue-500 text-white' : ''}`}>
            Categorías
          </button>
        </div>

        {activeTab === 'productos' && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 add-product-title">Agregar Nuevo Producto</h2>
            <AddProductForm />
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full p-2 border rounded mt-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <PrintButton onBeforePrint={handleBeforePrint} />
            <ProductList searchTerm={searchTerm} />
          </div>
        )}

        {activeTab === 'categorias' && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agregar Nueva Categoría</h2>
            <AddCategoryForm />
            <h2 className="text-2xl font-semibold mb-4">Categorías</h2>
            <CategoryList />
          </div>
        )}
        
      </main>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Volver arriba"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  )
}