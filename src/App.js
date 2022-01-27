import { people } from './data.js';
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      {people.map(person => (
        <Profile
          key={person.id}
          name={person.name}
          imageId={person.imageId}
        />
      ))}
    </section>
  );
}
