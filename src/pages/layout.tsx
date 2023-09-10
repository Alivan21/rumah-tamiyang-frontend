import { IconBaseProps } from "react-icons";

export type navsProps = {
  id: number;
  labelText: string;
  labelIcon: React.ReactElement<IconBaseProps>;
  url: string;
};
