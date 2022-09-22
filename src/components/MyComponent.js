const MyComponent = ({ value, name, saludar, children }) => {
  console.log(value);
  console.log(name);
  console.log(children);
  saludar();

  return (
    <>
      <h1>Componente :{name}</h1>
      Hijo: {children}
    </>
  )
};

export default MyComponent;