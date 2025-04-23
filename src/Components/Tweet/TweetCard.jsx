function TweetCard({heading}) {
  return (
    <div className="border rounded-2xl flex justify-center items-center flex-col py-8 px-5">
      <h1 className="my-2">{heading}</h1>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos
        id, adipisci aperiam sit alias suscipit doloribus perspiciatis amet non!
      </p>
    </div>
  );
}

export default TweetCard;
