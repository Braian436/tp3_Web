import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ nombre, precio, imagen, stock }) {
    const sinStock = stock === 0;

    return (
        <Card className={`h-100 shadow-sm overflow-hidden ${ sinStock ? 'border-danger border-2 bg-light' : 'border-secondary-subtle' }`}>
            <div className="ratio ratio-4x3 bg-white p-3">
                <Card.Img variant="top" src={imagen} alt={nombre} className="object-fit-contain p-2"/>
            </div>

            <Card.Body className="d-flex flex-column p-3">
                <Card.Title className={`fs-6 fw-semibold mb-1 ${sinStock ? 'text-secondary' : 'text-dark'}`}>
                {nombre}
                </Card.Title>

                <div className="fs-5 fw-bold text-dark mb-2">
                ${precio.toLocaleString('es-AR')}
                </div>

                <Card.Text className={`small mb-3 ${sinStock ? 'text-danger fw-bold' : 'text-success'}`}>
                {sinStock ? 'Sin stock' : `Stock disponible: ${stock}`}
                </Card.Text>

                <Button type="button" variant={sinStock ? 'secondary' : 'warning'} disabled={sinStock} className={`mt-auto w-100 rounded-pill fw-semibold ${ sinStock ? 'disabled opacity-50' : 'text-dark shadow-sm'}`}>
                {sinStock ? 'Agotado' : 'Agregar'}
                </Button>
            </Card.Body>
        </Card>
    );
}