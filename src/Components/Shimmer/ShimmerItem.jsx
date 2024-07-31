import "./ShimmerItem.css";
const ShimmerItem = () => {
  return (
    <div className="shimmerCard">
      <div className="shimmerBG media"></div>
      <div className="p-25">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG title-line end"></div>

        <div className="shimmerBG content-line m-t-24"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line end"></div>
      </div>
    </div>
  );
};
export default ShimmerItem;
