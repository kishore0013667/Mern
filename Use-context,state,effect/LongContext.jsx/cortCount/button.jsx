function Product() {
  const { count, setCount } = useContext(CartContext);

  return (
    <button onClick={() => setCount(count + 1)}>
      Add Product
    </button>
  );
}