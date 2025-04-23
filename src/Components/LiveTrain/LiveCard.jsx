function LiveCard({ video, title, desc, discountPrice, actualPrice }) {
  return (
    <div className="border rounded-3xl px-3 py-3">
      <iframe
        className="w-full h-[300px] p-4"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="flex gap-5">
        <span>{discountPrice}</span>
        <span className="line-through">{actualPrice}</span>
        </div>
        <button className="bg-[#F97316] mx-2 my-4 rounded py-2">Buy Now</button>
      </div>
    </div>
  );
}

export default LiveCard;
