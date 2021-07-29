// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Copy2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Copy2Icon(props: Copy2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 22"}
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
          "M18.726 7.93h-8.427c-1.034 0-1.872.79-1.872 1.763v7.931c0 .974.838 1.763 1.872 1.763h8.427c1.034 0 1.872-.79 1.872-1.763v-7.93c0-.974-.838-1.763-1.872-1.763z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.681 13.218h-.936c-.497 0-.973-.186-1.324-.516a1.711 1.711 0 01-.548-1.246V3.525c0-.468.197-.916.548-1.246.351-.33.827-.517 1.324-.517h8.427c.496 0 .973.186 1.324.517.35.33.548.778.548 1.246v.881"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Copy2Icon;
/* prettier-ignore-end */
