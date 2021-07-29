// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector65Icon(props: Vector65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 10"}
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
        opacity={".5"}
        d={"M1 1v8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector65Icon;
/* prettier-ignore-end */
