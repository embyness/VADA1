// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tmSTp4sEZSUn4K52S4J5Cc
// Component: 63Pv9Z3P-4
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LoginScreenIcon from "../../LoginScreenIcon"; // plasmic-import: LUHUSpECu9/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: tmSTp4sEZSUn4K52S4J5Cc/projectcss
import * as sty from "./PlasmicLoginScreenHeader.module.css"; // plasmic-import: 63Pv9Z3P-4/css

export type PlasmicLoginScreenHeader__VariantMembers = {};

export type PlasmicLoginScreenHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginScreenHeader__VariantsArgs;
export const PlasmicLoginScreenHeader__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLoginScreenHeader__ArgsType = {};
type ArgPropType = keyof PlasmicLoginScreenHeader__ArgsType;
export const PlasmicLoginScreenHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginScreenHeader__OverridesType = {
  root?: p.Flex<"div">;
  loginScreenIcon?: p.Flex<typeof LoginScreenIcon>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultLoginScreenHeaderProps {
  className?: string;
}

function PlasmicLoginScreenHeader__RenderFunc(props: {
  variants: PlasmicLoginScreenHeader__VariantsArgs;
  args: PlasmicLoginScreenHeader__ArgsType;
  overrides: PlasmicLoginScreenHeader__OverridesType;
  dataFetches?: PlasmicLoginScreenHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <LoginScreenIcon
        data-plasmic-name={"loginScreenIcon"}
        data-plasmic-override={overrides.loginScreenIcon}
        className={classNames("__wab_instance", sty.loginScreenIcon)}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox
        )}
      >
        {"Welcome to Vicara"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginScreenIcon", "freeBox"],
  loginScreenIcon: ["loginScreenIcon"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginScreenIcon: typeof LoginScreenIcon;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginScreenHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginScreenHeader__VariantsArgs;
    args?: PlasmicLoginScreenHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLoginScreenHeader__Fetches;
  } & Omit<PlasmicLoginScreenHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoginScreenHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLoginScreenHeader__ArgProps,
      internalVariantPropNames: PlasmicLoginScreenHeader__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLoginScreenHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginScreenHeader";
  } else {
    func.displayName = `PlasmicLoginScreenHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginScreenHeader = Object.assign(
  // Top-level PlasmicLoginScreenHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginScreenIcon: makeNodeComponent("loginScreenIcon"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLoginScreenHeader
    internalVariantProps: PlasmicLoginScreenHeader__VariantProps,
    internalArgProps: PlasmicLoginScreenHeader__ArgProps
  }
);

export default PlasmicLoginScreenHeader;
/* prettier-ignore-end */
