import React, { useEffect, useState } from 'react'

function SearchBar({query, onChange, onShowStockOnlyChange}) { 
  return (
    <>
      <form>
        <input type="text" name="searchQuery" placeholder="search" value={query} onChange={onChange} />
        <br/>
        <input type="checkbox" name="showStockOnly" onClick={onShowStockOnlyChange} />
        <span> only show products in stock</span>
      </form>
    </>
  )
}

function ProductTable({data}) {
  const categories = [...new Set(data.map((row) => row.category))]
  const rows = []

  categories.forEach(category => {
    rows.push(<ProductCategoryRow key={category} category={category} />)
    data.forEach(product => {
      if (product.category === category) {
        rows.push(<ProductRow key={product.name} product={product} />)
      }
    })
  })

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}

function ProductCategoryRow({category}) {
  return (
    <>
      <tr>
        <td className="category-row" colSpan="2">
          <h1>{category}</h1>
        </td>
      </tr>
    </>
  )
}

function ProductRow({product}) {
  return (
    <>
      <tr style={!product.stocked ? {color: 'red'} : {}}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  )
}

export default function FilterableProductTable({products}) {
  const [query, setQuery] = useState('')
  const [showStockOnly, setShowStockOnly] = useState(false)
  const [filteredData, setFilteredData] = useState(products)

  function filterData(products, query, showStockOnly) {
    return products.filter((row) => {
      return showStockOnly 
      ? row.name.search(new RegExp(query, "i")) > -1 & row.stocked === true
      : row.name.search(new RegExp(query, "i")) > -1
    })
  }

  function handleSearchQueryChange(e) {  
    setQuery(e.target.value)
  }

  function handleShowStockOnlyChange(e) {
    setShowStockOnly(e.target.checked)
  }

  useEffect(() => {
    setFilteredData(filterData(products, query, showStockOnly))
  }, [products, query, showStockOnly])

  return (
    <>
      <iframe src={"https://ghostbin.co/paste/5u5mc"} title="code"></iframe>
      <div>
        <SearchBar query={query} onChange={handleSearchQueryChange} showStockOnly={showStockOnly} onShowStockOnlyChange={handleShowStockOnlyChange} />
        <ProductTable data={filteredData} />
      </div>
    </>
  )
}
