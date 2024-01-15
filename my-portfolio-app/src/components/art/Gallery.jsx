import "./gallery.scss";

const artworks = [
  {
    id: 1,
    image: 'path/to/image1.jpg',
    name: 'Artwork 1',
    medium: 'Oil on Canvas',
    size: '24x36 inches',
    year: '2022',
    price: '$500',
  },
  // Add more artworks as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork-item">
          <img src={artwork.image} alt={artwork.name} />
          <div className="artwork-info">
            <h3>{artwork.name}</h3>
            <p>{artwork.medium}</p>
            <p>{artwork.size}</p>
            <p>Year: {artwork.year}</p>
            <p>Price: {artwork.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
