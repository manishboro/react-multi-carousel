const CarouselMainCard = ({ data }) => {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <img
        src={data.image}
        alt={data.name}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default CarouselMainCard;
