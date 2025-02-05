"use client"

interface PrintButtonProps {
  onBeforePrint: () => Promise<void>;
}

export default function PrintButton({ onBeforePrint }: PrintButtonProps) {
  const handlePrint = async () => {
    // Scroll suave al final de la página
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    
    // Esperamos a que termine el scroll antes de continuar
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    await onBeforePrint();
    window.print();
  }

  return (
    <button onClick={handlePrint} className="p-2 bg-gray-500 text-white rounded">
      Imprimir Catálogo
    </button>
  )
}

