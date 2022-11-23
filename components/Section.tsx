import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export default function Section({ children }: Props) {
  return <section className="w-screen">{children}</section>;
}
