// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tmSTp4sEZSUn4K52S4J5Cc
// Component: yTY17323UJ
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
import LoginScreenHeader from "../../LoginScreenHeader"; // plasmic-import: 63Pv9Z3P-4/component
import LoginScreenInputFields from "../../LoginScreenInputFields"; // plasmic-import: RgbrLvftDJH/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: tmSTp4sEZSUn4K52S4J5Cc/projectcss
import * as sty from "./PlasmicLoginCardPersonal.module.css"; // plasmic-import: yTY17323UJ/css

export type PlasmicLoginCardPersonal__VariantMembers = {};

export type PlasmicLoginCardPersonal__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginCardPersonal__VariantsArgs;
export const PlasmicLoginCardPersonal__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLoginCardPersonal__ArgsType = {};
type ArgPropType = keyof PlasmicLoginCardPersonal__ArgsType;
export const PlasmicLoginCardPersonal__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginCardPersonal__OverridesType = {
  root?: p.Flex<"div">;
  frame48?: p.Flex<"div">;
  loginScreenHeader?: p.Flex<typeof LoginScreenHeader>;
  freeBox?: p.Flex<"div">;
  loginScreenInputFields?: p.Flex<typeof LoginScreenInputFields>;
};

export interface DefaultLoginCardPersonalProps {
  className?: string;
}

function PlasmicLoginCardPersonal__RenderFunc(props: {
  variants: PlasmicLoginCardPersonal__VariantsArgs;
  args: PlasmicLoginCardPersonal__ArgsType;
  overrides: PlasmicLoginCardPersonal__OverridesType;
  dataFetches?: PlasmicLoginCardPersonal__Fetches;
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"frame48"}
        data-plasmic-override={overrides.frame48}
        hasGap={true}
        className={classNames(defaultcss.all, sty.frame48)}
      >
        <LoginScreenHeader
          data-plasmic-name={"loginScreenHeader"}
          data-plasmic-override={overrides.loginScreenHeader}
          className={classNames("__wab_instance", sty.loginScreenHeader)}
        />

        {false ? (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox
            )}
          >
            {"Create your Personal Account"}
          </div>
        ) : null}

        <LoginScreenInputFields
          data-plasmic-name={"loginScreenInputFields"}
          data-plasmic-override={overrides.loginScreenInputFields}
          className={classNames("__wab_instance", sty.loginScreenInputFields)}
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame48",
    "loginScreenHeader",
    "freeBox",
    "loginScreenInputFields"
  ],
  frame48: [
    "frame48",
    "loginScreenHeader",
    "freeBox",
    "loginScreenInputFields"
  ],
  loginScreenHeader: ["loginScreenHeader"],
  freeBox: ["freeBox"],
  loginScreenInputFields: ["loginScreenInputFields"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame48: "div";
  loginScreenHeader: typeof LoginScreenHeader;
  freeBox: "div";
  loginScreenInputFields: typeof LoginScreenInputFields;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginCardPersonal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginCardPersonal__VariantsArgs;
    args?: PlasmicLoginCardPersonal__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLoginCardPersonal__Fetches;
  } & Omit<PlasmicLoginCardPersonal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoginCardPersonal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLoginCardPersonal__ArgProps,
      internalVariantPropNames: PlasmicLoginCardPersonal__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLoginCardPersonal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginCardPersonal";
  } else {
    func.displayName = `PlasmicLoginCardPersonal.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginCardPersonal = Object.assign(
  // Top-level PlasmicLoginCardPersonal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame48: makeNodeComponent("frame48"),
    loginScreenHeader: makeNodeComponent("loginScreenHeader"),
    freeBox: makeNodeComponent("freeBox"),
    loginScreenInputFields: makeNodeComponent("loginScreenInputFields"),

    // Metadata about props expected for PlasmicLoginCardPersonal
    internalVariantProps: PlasmicLoginCardPersonal__VariantProps,
    internalArgProps: PlasmicLoginCardPersonal__ArgProps
  }
);

export default PlasmicLoginCardPersonal;
/* prettier-ignore-end */
