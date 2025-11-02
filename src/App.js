import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="page-container">
        <section className="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className="hero-sub">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <div className="listing-row">
          <aside className="sidebar">
            <Filters />
          </aside>

          <section className="products-area">
            <div className="toolbar">
              <div className="items-count">3425 ITEMS</div>
              <div className="sort">RECOMMENDED ▾</div>
            </div>

            <ProductGrid />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
