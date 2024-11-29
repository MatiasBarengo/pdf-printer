"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth } from 'firebase/auth';
import ProductList from '@/components/ProductList'
import CategoryList from '@/components/CategoryList'
import AddProductForm from '@/components/AddProductForm'
import AddCategoryForm from '@/components/AddCategoryForm'
import PrintButton from '@/components/PrintButton'
import Spinner from '@/components/Spinner'

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('productos');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/signin');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 catalog-title">Catálogo de Productos</h1>
      
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
          
          <PrintButton />
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
  )
}