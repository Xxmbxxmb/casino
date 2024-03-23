import React from "react"

const BlackjackTable = () => {
    return (
      <div className="min-h-screen bg-green-500 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-black">
            🂡 Blackjack 🂠
          </h1>
  
          <div className="flex justify-between">
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-black">Tu Mano</h2>
              {/* Componente para mostrar la mano del jugador */}
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Mano del Crupier
              </h2>
              {/* Componente para mostrar la mano del crupier */}
            </div>
          </div>
  
          <div className="mt-8 flex justify-center">
            {/* Botones de acción */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold mr-4 transition-colors">
              Pedir Carta
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
              Plantarse
            </button>
          </div>
  
          <div className="mt-6 flex justify-center">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
              Reiniciar Juego
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlackjackTable;