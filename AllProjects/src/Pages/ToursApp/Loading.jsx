function Loading({ id, name, image, description, price }) {
  return (
    <div key={id}>
      <img src={image} alt={name} />
      <article>{description}</article>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Loading;
