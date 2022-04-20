const CarouselMiniCard = ({ data }) => {
  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        height: "100%",
        borderRadius: "5px",
        overflow: "hidden",
        boxShadow:
          "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <img
          src={data.image}
          alt={data.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: "15px 10px 25px 10px" }}>
        <h1>Lorem Ipsum</h1>
        <div style={{ marginTop: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
    </div>
  );
};

export default CarouselMiniCard;
