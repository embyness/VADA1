// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector58Icon(props: Vector58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 601 2"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1h598.779"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector58Icon;
/* prettier-ignore-end */
