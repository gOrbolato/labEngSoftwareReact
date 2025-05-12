export default function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={person.imageUrl}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
