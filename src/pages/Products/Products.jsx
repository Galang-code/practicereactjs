import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/getAllProducts';
import ProductList from '../../components/ProductList/ProductList';
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Ambil semua produk dari layanan
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts); // Default: tampilkan semua produk
  }, []);

  useEffect(() => {
    // Filter produk berdasarkan kategori
    if (filter === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category.toLowerCase() === filter.toLowerCase())
      );
    }
  }, [filter, products]);

  const RadioButtonOpts = [
    { label: 'All', value: 'all' },
    { label: 'BMW', value: 'BMW' },
    { label: 'MERCEDES', value: 'MERCEDES' },
  ];

  const handleFilterChange = (selectedValue) => {
    setFilter(selectedValue);
  };

  return (
    <>
      <Navbar />

      <div className="px-24 py-4 gap-4 mt-4 flex-wrap">
        <h3 className="font-medium">Filter</h3>
        <div className="flex gap-2 flex-wrap">
          <RadioButton
            options={RadioButtonOpts}
            defaultValue={'all'}
            onChange={handleFilterChange} // Tangkap perubahan filter
          />
        </div>
      </div>

      <section className="container px-24 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-auto">
          <ProductList products={filteredProducts} />
        </div>
      </section>
    </>
  );
}

export default Products;
