import { useState } from "react";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    description: ""
  });

  const [products, setProducts] = useState([]); 
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");


  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setProduct((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };
  
      console.log("Current Product Values:", updated);
      return updated;
    });
  };
  
  

  const validate = () => {
    const newErrors = {};
    if (!product.name.trim()) newErrors.name = "Product name is required.";
    if (!product.category.trim()) newErrors.category = "Category is required.";
    if (!product.quantity || Number(product.quantity) <= 0)
      newErrors.quantity = "Quantity must be greater than 0.";
    if (!product.price || Number(product.price) <= 0)
      newErrors.price = "Price must be greater than 0.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop submission
    }

    setErrors({}); // clear old errors
    setIsSubmitting(true);
    setMessage("✅ Product added successfully!");
    // clear the message after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 1000);

    setProducts((prev) => [...prev, product]);

    console.log("New Product:", product);
    console.log("All Products:", [...products, product]);

    setTimeout(() => {
      setIsSubmitting(false);
      setProduct({ name: "", category: "", quantity: "", price: "", description: "" });
    }, 800);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-dark-blue-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Product Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Category */}
          <div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>

          {/* Quantity */}
          <div>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={product.quantity}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
          </div>

          {/* Price */}
          <div>
            <input
              type="number"
              name="price"
              placeholder="Price per Unit"
              value={product.price}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>

          {/* Description (optional, no validation) */}
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border rounded border-gray-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      {/* Success Message */}
      {message && (
        <p className="text-green-600 font-medium mt-2">{message}</p>
      )}
      {/* Products Table */}
      <div className="max-w-3xl mx-auto p-6 bg-dark-blue-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <table className="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-black-200 text-left">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">{p.category}</td>
                <td className="p-2 border">{p.quantity}</td>
                <td className="p-2 border">{p.price}</td>
                <td className="p-2 border">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
