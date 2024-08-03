const Childprops = ({propsData}) => {
  return (
    <div className="row">
      <h2>{propsData.title}</h2>
      <p>{propsData.description}</p>
      <p>{propsData.date}</p>
    </div>
  );
};

export default Childprops;


