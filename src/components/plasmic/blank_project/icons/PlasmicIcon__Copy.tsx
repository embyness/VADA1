// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyIcon(props: CopyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
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
        d={
          "M14.167 6H7.792c-.783 0-1.417.597-1.417 1.333v6c0 .737.634 1.334 1.417 1.334h6.375c.782 0 1.416-.597 1.416-1.334v-6c0-.736-.634-1.333-1.416-1.333z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3.542 10h-.709a1.46 1.46 0 01-1.001-.39 1.295 1.295 0 01-.415-.943v-6c0-.354.149-.693.415-.943a1.46 1.46 0 011.001-.39h6.375c.376 0 .736.14 1.002.39s.415.589.415.943v.666"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CopyIcon;
/* prettier-ignore-end */
