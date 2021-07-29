// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector57Icon(props: Vector57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 455 2"}
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
        d={"M1 1h453"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector57Icon;
/* prettier-ignore-end */
