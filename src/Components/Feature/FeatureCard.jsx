function FeatureCard({ title, description }) {
  return (
    <div className="flex items-start flex-col">
      <h3 className="text-xl my-4">{title}</h3>
      <p className="text-justify">{description}</p>
    </div>
  );
}

export default FeatureCard;
