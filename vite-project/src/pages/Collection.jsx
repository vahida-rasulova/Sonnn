import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Collection.css";
import ProductCollection from "../components/ProductCollection";
import data from "../data.json";
import Pagination from "../components/Pagination";
import Timer from "../components/Timer";
import { RiSearch2Line } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import ScrollToTop from "react-scroll-to-top";

function Collection() {
  useEffect(() => {
    document.title = "Products";
  }, []);
  const filterRef = useRef();
  const showFilter = () => {
    filterRef.current.classList.toggle("responsive_filter");
    console.log("kil");
  };
  const [products, setProducts] = useState(data);

  const categories = [
    "Bedroom furniture",
    "Guest furniture",
    "Child and Young",
    "Office furniture",
    "Sofas",
    "Chairs",
    "Closet",
  ];

  const [filters, setFilters] = useState({
    category: "",
    price: "",
    search: "",
    lower: 100,
    upper: 10000,
  });
  let filteredProducts = products
    .filter((product) => {
      if (!filters.search) return true;
      return product.name.toLowerCase().includes(filters.search.toLowerCase());
    })
    .filter((product) => {
      if (!filters.category) return true;
      if (filters.category === "all") return true;
      return product.category === filters.category;
    })
    .sort((a, b) => {
      if (!filters.price) return 0;
      if (filters.price === "priceasc") return a.price - b.price;
      if (filters.price === "pricedesc") return b.price - a.price;
      if (filters.price === "nameasc")
        return a.name.charCodeAt(0) - b.name.charCodeAt(0);
      if (filters.price === "namedesc")
        return b.name.charCodeAt(0) - a.name.charCodeAt(0);
    })
    .filter((p) => p.price >= filters.lower && p.price <= filters.upper);

  const handleUpper = (e) => {
    setFilters({ ...filters, upper: +e.target.value });
  };
  const lowerHandle = (e) => {
    setFilters({ ...filters, lower: +e.target.value });
  };

  const [activePage, setActivePage] = useState(1);
  const productPerPage = 12;
  const totalPageCount = Math.ceil(filteredProducts.length / productPerPage);
  if (activePage > totalPageCount) {
    setActivePage(totalPageCount);
  }
  if (!activePage && totalPageCount > 0) {
    setActivePage(1);
  }
  const start = (activePage - 1) * productPerPage;

  const end = start + productPerPage;

  const resetFilters = () => {
    setFilters({
      category: "",
      price: "",
      search: "",
      lower: 100,
      upper: 10000,
    });
    filteredProducts=filters
  };
  return (
    <>
      <div className="container">
        <ScrollToTop smooth top="1000" width="20" height="20" color="#fff" />
        <div className="daySale-before">
          <p>
            <Link to="/">
              <span>Home </span>
            </Link>{" "}
            / Products
          </p>
        </div>
        <div className="daySale">
          <div className="daySale-content">
            <h1>Two Day Sale - Up To 40% Off</h1>
            <div className="hourses">
              <Timer duration={20 * 24 * 60 * 60 * 1000} />
            </div>
            <h3>Ending Soon!</h3>
          </div>
        </div>
        <div className="panel-products">
          <div className="res-filter">
            <div className="res-filter-icon" onClick={showFilter}>
              <BiFilterAlt />
              <h1>Filter</h1>
            </div>
            <div className="sort-by res-sort-by">
              <select
                name=""
                id=""
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              >
                <option value="nameasc">Name (A-Z)</option>
                <option value="namedesc">Name(Z-A)</option>
                <option value="priceasc">Price (lowest)</option>
                <option value="pricedesc">Price (highest)</option>
              </select>
            </div>
          </div>
          <div className="res-overlay-filter" ref={filterRef}>
            {" "}
          </div>
          <div className="filter-panel res-panel" ref={filterRef}>
            <div className="res-nav-filer">
              <h1 className="kateqoriya">Category</h1>
              <div className="res-filter-close" onClick={showFilter}>
                <SlClose />
              </div>
            </div>

            <div className="category-filter">
              <ul>
                <li
                  className="category"
                  style={{ cursor: "pointer", userSelect: "none" }}
                  onClick={() => setFilters({ ...filters, category: "all" })}
                >
                  All ({data.length})
                </li>
                {categories.map((category) => (
                  <li
                    className="category"
                    style={{ cursor: "pointer", userSelect: "none" }}
                    key={category}
                    onClick={() =>
                      setFilters({ ...filters, category: category })
                    }
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="price-filter">
              <h1 className="priceh1">Price Range</h1>
              <div className="wrapper">
                <fieldset className="filter-price">
                  <div className="price-coll">
                    <div className="slder">
                      <div className="progres-slder"></div>
                    </div>
                    <div className="price-field">
                      <input
                        type="range"
                        min="200"
                        max="10000"
                        value={filters.lower}
                        id="lower"
                        onChange={(e) => lowerHandle(e)}
                      />
                      <input
                        type="range"
                        min="200"
                        max="10000"
                        value={filters.upper}
                        id="upper"
                        onChange={(e) => handleUpper(e)}
                      />
                    </div>
                  </div>
                  <div className="price-wrap">
                    <div className="price-container">
                      <div className="price-wrap-1">
                        <label htmlFor="one">$</label>
                        <input id="one" value={filters.lower} />
                      </div>
                      <div className="price-wrap_line"> - </div>
                      <div className="price-wrap-2">
                        <label htmlFor="two">$</label>
                        <input id="two" value={filters.upper} />
                      </div>
                    </div>
                    <button
                      className="price-title"
                      onClick={() => {
                        console.log("price");
                      }}
                    >
                      Clear filter
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="filter-panel">
            <div className="search-filter">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
              <span className="searc-icon-ri">
                <RiSearch2Line />
              </span>
            </div>
            <div className="category-filter">
              <h1 className="kateqoriya">Category</h1>
              <ul>
                <li
                  className="category"
                  style={{ cursor: "pointer", userSelect: "none" }}
                  onClick={() => setFilters({ ...filters, category: "all" })}
                >
                  All ({data.length})
                </li>
                {categories.map((category) => (
                  <li
                    className="category"
                    style={{ cursor: "pointer", userSelect: "none" }}
                    key={category}
                    onClick={() =>
                      setFilters({ ...filters, category: category })
                    }
                  >
                    {category} (
                    {
                      data.filter((product) => product.category == category)
                        .length
                    }
                    )
                  </li>
                ))}
              </ul>
            </div>

            <div className="price-filter">
              <h1 className="priceh1">Price Range</h1>
              <div className="wrapper">
                <fieldset className="filter-price">
                  <div className="price-coll">
                    <div className="slder">
                      <div className="progres-slder"></div>
                    </div>
                    <div className="price-field">
                      <input
                        type="range"
                        min="200"
                        max="10000"
                        value={filters.lower}
                        id="lower"
                        onChange={(e) => lowerHandle(e)}
                      />
                      <input
                        type="range"
                        min="200"
                        max="10000"
                        value={filters.upper}
                        id="upper"
                        onChange={(e) => handleUpper(e)}
                      />
                    </div>
                  </div>
                  <div className="price-wrap">
                    <div className="price-container">
                      <div className="price-wrap-1">
                        <label htmlFor="one">$</label>
                        <input id="one" value={filters.lower} />
                      </div>
                      <div className="price-wrap_line"> - </div>
                      <div className="price-wrap-2">
                        <label htmlFor="two">$</label>
                        <input id="two" value={filters.upper} />
                      </div>
                    </div>
                    <span
                      className="price-title"
                      onClick={() => resetFilters()}
                    >
                      Clear filter
                    </span>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="product-pagination">
            <div className="sort-by">
              <p>Showing {filteredProducts.length} Products</p>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              >
                <option value="nameasc">Name (A-Z)</option>
                <option value="namedesc">Name(Z-A)</option>
                <option value="priceasc">Price (lowest)</option>
                <option value="pricedesc">Price (highest)</option>
              </select>
            </div>
            <div className="products">
              {filteredProducts.length > 0 ? (
                filteredProducts
                  .slice(start, end)
                  .map((product) => (
                    <ProductCollection key={product.id} props={product} />
                  ))
              ) : (
                <div className="no-favorit-produst">
                  <img src="./images/Faqs/empty1.png" alt="" />
                  <h1>Searched result not found</h1>
                </div>
              )}
            </div>
            <div className="pag">
              <Pagination
                totalPageCount={totalPageCount}
                setActivePage={setActivePage}
                activePage={activePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
