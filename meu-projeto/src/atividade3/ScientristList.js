import { people } from './dataPeople';
import Avatar from './Avatar';

export default function ScientristList() {
  return (
    <div>
      <h2>Cientistas Famosos</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Avatar person={person} size={80} />
            <p><strong>{person.name}</strong> - {person.profession}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
