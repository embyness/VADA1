// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1Icon(props: Ellipse1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 95 95"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"47.5"} cy={"47.5"} r={"47.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse1Icon;
/* prettier-ignore-end */
