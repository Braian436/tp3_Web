import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ProductCard from './components/productCard/ProductCard';

const productosBarberia = [
  { id: 1, nombre: 'Cera en Polvo Voluminizadora (Matte Dust)', precio: 7500, stock: 6, imagen: 'https://imgs.search.brave.com/jzn8wXizdNh7p2XyAv0BB00v5OaSnp2O0bN5tYCeBg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk5MzU5My1NTEE1/MTkyMTQ2NTI2N18x/MDIwMjItRS53ZWJw'},
  { id: 2, nombre: 'Gel Fijador Extra Fuerte 280g', precio: 4800, stock: 12, imagen: 'https://imgs.search.brave.com/mBHPKFq3GbvQhSzSF72MkjcX-yxYm949Hsf26x1-51I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgyOTIwNC1NTFU3/NzQzMzM1MjAyNF8w/NzIwMjQtRS53ZWJw'},
  { id: 3, nombre: 'Pomada Modeladora Probelle 150g', precio: 8900, stock: 0, imagen: 'https://imgs.search.brave.com/qQNPjbmeDmZRpzrs7rcGuKv5GIvhzYny55Vz0Bl4Ks4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcHB1Yi5pby9j/ZG4tY2dpL2ltYWdl/L3c9NjAwLGg9NjAw/LHE9ODAsZj1hdXRv/L2FrYWljb3NtZXRp/Y29zL21lZGlhL3Vw/bG9hZHMvcHJvZHV0/b3MvZm90by9iZmUy/M2EyZGU5NDdmZmls/ZS5wbmc'},
  { id: 4, nombre: 'Aceite Nutritivo para Barba', precio: 6200, stock: 4, imagen: 'https://imgs.search.brave.com/NISWcFMCk4wooB5bFrE30PwCdkI5FYv9vMSoRiWmOi4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzExTW5HUEdaLUwu/anBn'},
  { id: 5, nombre: 'After Shave Lotion', precio: 5400, stock: 0, imagen: 'https://imgs.search.brave.com/uG-KELiL9_B5vx38W7chJh3vGtMHacGrxQ2MEO0q4Ks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vU19RX05QXzJY/XzYyODY2Mi1NTEE2/OTY0NDYyNzI3MF8w/NTIwMjMtVi53ZWJw'},
  { id: 6, nombre: 'Shampoo Anticaída y Fortificante', precio: 9800, stock: 9, imagen: 'https://imgs.search.brave.com/xqSySssKoj7oQ97PsJoJipBsSvQ_Ocb1nzAn2zeYBXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY2NjE5Ny1NQ083/OTkxMjc2MDA4NF8x/MDIwMjQtRS53ZWJw'}
];

export default function App() {
  return (
    <div>
      <Navbar />
      
      <section className="section">
        <div className="container">
          <header className="mb-5 has-text-centered-mobile has-text-left-tablet">
            <h2 className="title is-3 has-text-weight-bold">
              Artículos y Productos de Barbería
            </h2>
          </header>

          <div className="columns is-multiline">
            {productosBarberia.map((producto) => (
              <div key={producto.id} className="column is-12-mobile is-6-tablet is-4-desktop is-flex">
                <ProductCard 
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imagen={producto.imagen}
                  stock={producto.stock}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}