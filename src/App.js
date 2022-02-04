import { people, teacher, students} from './data.js';
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <>
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
    <section>
      <h1> Terence teaches on Outschool </h1>
      {
        <Profile
          key={teacher.id}
          name={teacher.name}
          imageId={teacher.imageSrc}
        />
      }
    </section>
    <section>
      <h1>Amazing students</h1>
      {students.map(person => (
        <Profile
          key={person.id}
          name={person.name}
          imageId={person.imageSrc}
        />
      ))}
    </section>
    </>
  );
}
