import { type PropsWithChildren } from "react";

type ComponentProgs = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id }: ComponentProgs) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
    </div>
  );
}
export default Component;
