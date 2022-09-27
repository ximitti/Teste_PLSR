import React from 'react';

import Modal from './components/Modal';
import Stock from './data.json';

export default function App() {
  const [products, setProducts] = React.useState(Stock);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [inputSearch, setInputSearch] = React.useState('');

  React.useEffect(() => {
    const filter = products && products.length && products.reduce((output, item) => {
      return !output.includes(item.type) ? [...output, item.type] : [...output];
    }, []);

    setCategories(() => filter);
  }, []);

  React.useEffect(() => {
    searchItems();
  }, [inputSearch])

  const filterByCategory = (event) => {
    event.preventDefault();

    !event.target.value
    ? setFilteredProducts(() => [])
    : setFilteredProducts(() => products.filter(item => item.type === event.target.value));
  }

  const searchItems = () => {
    const re = new RegExp([inputSearch.toLowerCase("en_US")]);
    const filter = products && products.length && products.filter(({ name, type, seller, sport }) => {
      return (
        re.test(name.toLowerCase("en_US")) ||
        re.test(type.toLowerCase("en_US")) ||
        re.test(seller.toLowerCase("en_US")) ||
        re.test(sport.toLowerCase("en_US"))
      );
    });

    setFilteredProducts(() => filter);
  }

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sports wear</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
              type="search"
              placeholder="Buscar por nome"
              aria-label="Search" />
          </form>
        </div>
      </nav>

      <main className="container mx-auto p-3">
        <div className="container p-3">
          <select className="form-select"
            aria-label="Default select example"
            onChange={(e) => filterByCategory(e)}
          >
            <option key="default" value="">Filtrar por categoria</option>
            {
              categories && categories.length && categories.map( (category, i) => {
                return (
                  <option key={i} value={category}>{category}</option>
                )
              })
            }
          </select>
        </div>

        <div className="container row row-cols-1 row-cols-md-3 g-4 p-3 mx-auto">
          { filteredProducts && filteredProducts.length
            ? filteredProducts && filteredProducts.length && filteredProducts.map( (product, i) => {
              return (
                <div key={`item${i}`} className="col">
                  <div className="card bg-light border-secondary">
                    <img src={product.image_url} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price}</p>
                    </div>
                    <a 
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      href={`#item${i}`}
                      role="button"
                    >
                      Detalhes do produto
                    </a>
                  </div>
                  <Modal product={product} itemId={`item${i}`}/>
                </div>
              )
            })
            : products && products.length && products.map( (product, i) => {
              return (
                <div key={`item${i}`} className="col">
                  <div className="card bg-light border-secondary">
                    <img src={product.image_url} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price}</p>
                    </div>
                    <a 
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      href={`#item${i}`}
                      role="button"
                    >
                      Detalhes do produto
                    </a>
                  </div>
                  <Modal product={product} itemId={`item${i}`}/>
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  );
}