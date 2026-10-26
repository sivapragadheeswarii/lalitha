/**
 * Format currency or demo indicator
 */
export function formatDemoPrice(price) {
  if (!price) return "Price on Request";
  return price;
}

/**
 * Filter products by search term and category
 */
export function filterProducts(products, { category = "all", searchQuery = "" }) {
  return products.filter((product) => {
    const matchesCategory =
      category === "all" ||
      product.categoryId === category ||
      product.category.toLowerCase() === category.toLowerCase() ||
      (category === "bridal" && product.isBridal);

    const matchesSearch =
      !searchQuery.trim() ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      product.subCategory.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });
}
