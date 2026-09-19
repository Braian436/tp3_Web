export default function ProductCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0;

    return (
        <div className={`flex h-full flex-col overflow-hidden rounded-2xl shadow-sm ${sinStock ? "border-2 border-red-500 bg-red-50" : "border border-gray-200 bg-white"}`}>
            
            <div className="flex h-56 w-full items-center justify-center bg-white p-3">
                <img src={imagen} alt={nombre} className="max-h-full max-w-full object-contain mx-auto" />
            </div>

            <div className="flex grow flex-col p-4">
                <h5 className="text-lg font-semibold text-gray-900">{nombre}</h5>

                <p className="mb-1 text-xl font-bold text-gray-800"> ${precio.toLocaleString("es-AR")}</p>

                <p className={`mb-4 text-sm ${ sinStock ? "font-semibold text-red-600" : "text-gray-500"}`}>
                {sinStock ? "Sin stock" : `Stock disponible: ${stock}`}
                </p>

                <button type="button" disabled={sinStock} className={`mt-auto w-full !rounded-full px-3 py-2 font-medium text-white transition-colors ${sinStock ? "cursor-not-allowed bg-gray-400 opacity-60" : "bg-yellow-500 hover:bg-yellow-600" }`}>
                Agregar
                </button>
            </div>
        </div>
    );
}