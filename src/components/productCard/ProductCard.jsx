import React from 'react';

export default function ProductCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0;

    return (
        <div className={`card is-flex is-flex-direction-column is-flex-grow-1 ${ sinStock ? 'has-background-danger-light' : 'has-background-white' }`}>
            <div className="card-image p-3 has-background-white">
                <figure className="image is-4by3">
                    <img src={imagen} alt={nombre} style={{ objectFit: 'contain' }} />
                </figure>
            </div>

            <div className="card-content is-flex is-flex-direction-column is-flex-grow-1 p-4">
                <p className={`title is-6 mb-2 ${sinStock ? 'has-text-grey' : 'has-text-dark'}`}>
                {nombre}
                </p>

                <p className="subtitle is-5 has-text-weight-bold mb-2">
                ${precio.toLocaleString('es-AR')}
                </p>

                <p className={`is-size-7 mb-4 ${ sinStock ? 'has-text-danger has-text-weight-bold' : 'has-text-success'}`}>
                {sinStock ? 'Sin stock' : `Stock disponible: ${stock}`}
                </p>

                <div className="mt-auto">
                    <button type="button" disabled={sinStock} className={`button is-fullwidth is-rounded ${ sinStock ? 'is-static' : 'is-warning'}`}>
                        {sinStock ? 'Agotado' : 'Agregar'}
                    </button>
                </div>
            </div>
        </div>
    );
}