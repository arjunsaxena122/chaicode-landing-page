function TestimonialCard({ link, imgAlt, title, description }) {
  return (
    <div className="border rounded flex justify-center items-center my-10 mx-8">
      <img
        src={link}
        alt={imgAlt}
        className="w-20 border object-cover mx-4 my-3 px-2 py-1 rounded"
      />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
