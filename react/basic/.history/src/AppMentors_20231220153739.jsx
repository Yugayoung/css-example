import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const handelUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handelUpdate}>멘토의 이름을 바꾸기</button>
      <button
        onClick={() => {
          const name = prompt(`멘토의 이름은?`);
          const title = prompt(`멘토의 직함은?`);
          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt(`누구를 삭제하고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((m) => m.name !== name),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}

const initialPerson = {
  name: '가영',
  title: '개발자',
  mentors: [
    {
      name: '엘리',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
