import { Icon } from "./Icon";
import { SvgDelete } from "./SvgDelete";
import { SvgMinus } from "./SvgMinus";
import { SvgPlus } from "./SvgPlus";

export type SvgIconProps = {
  icon: Icon;
};

export const SvgIcon = (props: SvgIconProps) => {
  switch (props.icon) {
    case Icon.Plus:
      return <SvgPlus />;
    case Icon.Minus:
      return <SvgMinus />;
    case Icon.Delete:
      return <SvgDelete />;
    default:
      return <></>;
  }
};
