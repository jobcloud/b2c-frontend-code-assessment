// @ts-nocheck
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux"

const SomeComponent: FC = () => {
  const [stuff, setStuff] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const forceTypeA = useSelector<boolean>(state => state.stuff.forceTypeA)

  const fetchStuff = async (): Promise<void> => {
    const response = await fetch(`https://some.fancy.api`);
    if (response.status === 200) {
      const result = await response.json();
      if (result.type === "A" || forceTypeA) {
        return setStuff(result.payload);
      }
      if (result.type === "B") {
        return setStuff(result.payload.map((item) => `B-${item}`));
      }
    }
    return;
  };

  useEffect(() => {
    fetchStuff();
  }, []);

  return (
    <div>
      <h1>All the stuff</h1>
      {!!stuff.length ? (
        <ul>
          {stuff.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>...loading</p>
      )}
      {count > 5 && (
        <button
          onClick={() => {
            setCount((state) => state++);
            fetchStuff();
          }}
        >
          refresh stuff
        </button>
      )}
    </div>
  );
};

export default SomeComponent;
