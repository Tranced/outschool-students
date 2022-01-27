export default function Profile({ name, imageId }) {
  let imageUrl = (
    'https://i.imgur.com/' +
    imageId +
    's.jpg'
  );
  //so imageId prop is flexible enough to accomodate for urls
  if (imageId.includes("http")){
    imageUrl = imageId
  }
  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
    />
  );
}
