"use client"

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <button onClick={handlePrint} className="p-2 bg-gray-500 text-white rounded">
      Imprimir Catálogo
    </button>
  )
}

