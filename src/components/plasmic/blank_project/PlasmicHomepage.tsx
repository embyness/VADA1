// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tmSTp4sEZSUn4K52S4J5Cc
// Component: qsKlJvguY3Na
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: tmSTp4sEZSUn4K52S4J5Cc/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: qsKlJvguY3Na/css

import Ellipse1Icon from "./icons/PlasmicIcon__Ellipse1"; // plasmic-import: ocFti_1wZw/icon
import ellipse135LjtNoo4Ya from "./images/ellipse13.svg"; // plasmic-import: 5ljtNoo4ya/picture

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  inboardingCards?: p.Flex<"div">;
  infoCard?: p.Flex<"div">;
  usernameShuriken?: p.Flex<"div">;
  img?: p.Flex<"img">;
  shurikenB051?: p.Flex<"div">;
  loginCardPersonal?: p.Flex<"div">;
  frame48?: p.Flex<"div">;
  frame45?: p.Flex<"div">;
  group7?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  logoWhite012?: p.Flex<"div">;
  frame47?: p.Flex<"div">;
  frame46?: p.Flex<"div">;
  group84?: p.Flex<"div">;
  search?: p.Flex<"div">;
  rectangle24?: p.Flex<"div">;
  lastName?: p.Flex<"div">;
  search2?: p.Flex<"div">;
  rectangle25?: p.Flex<"div">;
  firstName?: p.Flex<"div">;
  search3?: p.Flex<"div">;
  rectangle26?: p.Flex<"div">;
  small?: p.Flex<"div">;
  small2?: p.Flex<"div">;
  search4?: p.Flex<"div">;
  rectangle27?: p.Flex<"div">;
  weveLookedItUpYourUsernameIsUnique?: p.Flex<"div">;
  search5?: p.Flex<"div">;
  rectangle28?: p.Flex<"div">;
  small3?: p.Flex<"div">;
  small4?: p.Flex<"div">;
  search6?: p.Flex<"div">;
  rectangle29?: p.Flex<"div">;
  small5?: p.Flex<"div">;
  small6?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  dataFetches?: PlasmicHomepage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"inboardingCards"}
            data-plasmic-override={overrides.inboardingCards}
            className={classNames(defaultcss.all, sty.inboardingCards)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"infoCard"}
              data-plasmic-override={overrides.infoCard}
              hasGap={true}
              className={classNames(defaultcss.all, sty.infoCard)}
            >
              <div
                data-plasmic-name={"usernameShuriken"}
                data-plasmic-override={overrides.usernameShuriken}
                className={classNames(defaultcss.all, sty.usernameShuriken)}
              >
                <img
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(defaultcss.img, sty.img)}
                  role={"img"}
                  src={ellipse135LjtNoo4Ya}
                />

                <div
                  data-plasmic-name={"shurikenB051"}
                  data-plasmic-override={overrides.shurikenB051}
                  className={classNames(defaultcss.all, sty.shurikenB051)}
                />
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__pbLgz
                )}
              >
                {"Add your kickass username"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.freeBox__hcRwc
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"loginCardPersonal"}
              data-plasmic-override={overrides.loginCardPersonal}
              hasGap={true}
              className={classNames(defaultcss.all, sty.loginCardPersonal)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame48"}
                data-plasmic-override={overrides.frame48}
                hasGap={true}
                className={classNames(defaultcss.all, sty.frame48)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame45"}
                  data-plasmic-override={overrides.frame45}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.frame45)}
                >
                  <div
                    data-plasmic-name={"group7"}
                    data-plasmic-override={overrides.group7}
                    className={classNames(defaultcss.all, sty.group7)}
                  >
                    <Ellipse1Icon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(defaultcss.all, sty.svg)}
                      role={"img"}
                    />

                    <div
                      data-plasmic-name={"logoWhite012"}
                      data-plasmic-override={overrides.logoWhite012}
                      className={classNames(defaultcss.all, sty.logoWhite012)}
                    />
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__nButN
                    )}
                  >
                    {"Welcome to Vicara"}
                  </div>
                </p.Stack>

                {false ? (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__qF2HN
                    )}
                  >
                    {"Create your Personal Account"}
                  </div>
                ) : null}

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame47"}
                  data-plasmic-override={overrides.frame47}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.frame47)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame46"}
                    data-plasmic-override={overrides.frame46}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.frame46)}
                  >
                    <div
                      data-plasmic-name={"group84"}
                      data-plasmic-override={overrides.group84}
                      className={classNames(defaultcss.all, sty.group84)}
                    >
                      <div
                        data-plasmic-name={"search"}
                        data-plasmic-override={overrides.search}
                        className={classNames(defaultcss.all, sty.search)}
                      >
                        <div
                          data-plasmic-name={"rectangle24"}
                          data-plasmic-override={overrides.rectangle24}
                          className={classNames(
                            defaultcss.all,
                            sty.rectangle24
                          )}
                        />

                        <div
                          data-plasmic-name={"lastName"}
                          data-plasmic-override={overrides.lastName}
                          className={classNames(defaultcss.all, sty.lastName)}
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.freeBox__yyewG
                            )}
                          >
                            {"Last Name"}
                          </div>
                        </div>
                      </div>

                      <div
                        data-plasmic-name={"search2"}
                        data-plasmic-override={overrides.search2}
                        className={classNames(defaultcss.all, sty.search2)}
                      >
                        <div
                          data-plasmic-name={"rectangle25"}
                          data-plasmic-override={overrides.rectangle25}
                          className={classNames(
                            defaultcss.all,
                            sty.rectangle25
                          )}
                        />

                        <div
                          data-plasmic-name={"firstName"}
                          data-plasmic-override={overrides.firstName}
                          className={classNames(defaultcss.all, sty.firstName)}
                        >
                          <div
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.freeBox__d62U
                            )}
                          >
                            {"First Name"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      data-plasmic-name={"search3"}
                      data-plasmic-override={overrides.search3}
                      className={classNames(defaultcss.all, sty.search3)}
                    >
                      <div
                        data-plasmic-name={"rectangle26"}
                        data-plasmic-override={overrides.rectangle26}
                        className={classNames(defaultcss.all, sty.rectangle26)}
                      />

                      <div
                        data-plasmic-name={"small"}
                        data-plasmic-override={overrides.small}
                        className={classNames(defaultcss.all, sty.small)}
                      >
                        <div
                          data-plasmic-name={"small2"}
                          data-plasmic-override={overrides.small2}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.small2
                          )}
                        >
                          {"Username"}
                        </div>
                      </div>
                    </div>

                    <div
                      data-plasmic-name={"search4"}
                      data-plasmic-override={overrides.search4}
                      className={classNames(defaultcss.all, sty.search4)}
                    >
                      <div
                        data-plasmic-name={"rectangle27"}
                        data-plasmic-override={overrides.rectangle27}
                        className={classNames(defaultcss.all, sty.rectangle27)}
                      />

                      <div
                        data-plasmic-name={"weveLookedItUpYourUsernameIsUnique"}
                        data-plasmic-override={
                          overrides.weveLookedItUpYourUsernameIsUnique
                        }
                        className={classNames(
                          defaultcss.all,
                          sty.weveLookedItUpYourUsernameIsUnique
                        )}
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__jfx2R
                          )}
                        >
                          {"We’ve looked it up, your username is unique!"}
                        </div>
                      </div>
                    </div>

                    {false ? (
                      <div
                        data-plasmic-name={"search5"}
                        data-plasmic-override={overrides.search5}
                        className={classNames(defaultcss.all, sty.search5)}
                      >
                        <div
                          data-plasmic-name={"rectangle28"}
                          data-plasmic-override={overrides.rectangle28}
                          className={classNames(
                            defaultcss.all,
                            sty.rectangle28
                          )}
                        />

                        <div
                          data-plasmic-name={"small3"}
                          data-plasmic-override={overrides.small3}
                          className={classNames(defaultcss.all, sty.small3)}
                        >
                          <div
                            data-plasmic-name={"small4"}
                            data-plasmic-override={overrides.small4}
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.small4
                            )}
                          >
                            {"Email address"}
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {false ? (
                      <div
                        data-plasmic-name={"search6"}
                        data-plasmic-override={overrides.search6}
                        className={classNames(defaultcss.all, sty.search6)}
                      >
                        <div
                          data-plasmic-name={"rectangle29"}
                          data-plasmic-override={overrides.rectangle29}
                          className={classNames(
                            defaultcss.all,
                            sty.rectangle29
                          )}
                        />

                        <div
                          data-plasmic-name={"small5"}
                          data-plasmic-override={overrides.small5}
                          className={classNames(defaultcss.all, sty.small5)}
                        >
                          <div
                            data-plasmic-name={"small6"}
                            data-plasmic-override={overrides.small6}
                            className={classNames(
                              defaultcss.all,
                              defaultcss.__wab_text,
                              sty.small6
                            )}
                          >
                            {"Password"}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </p.Stack>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "inboardingCards",
    "infoCard",
    "usernameShuriken",
    "img",
    "shurikenB051",
    "loginCardPersonal",
    "frame48",
    "frame45",
    "group7",
    "svg",
    "logoWhite012",
    "frame47",
    "frame46",
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName",
    "search3",
    "rectangle26",
    "small",
    "small2",
    "search4",
    "rectangle27",
    "weveLookedItUpYourUsernameIsUnique",
    "search5",
    "rectangle28",
    "small3",
    "small4",
    "search6",
    "rectangle29",
    "small5",
    "small6"
  ],
  inboardingCards: [
    "inboardingCards",
    "infoCard",
    "usernameShuriken",
    "img",
    "shurikenB051",
    "loginCardPersonal",
    "frame48",
    "frame45",
    "group7",
    "svg",
    "logoWhite012",
    "frame47",
    "frame46",
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName",
    "search3",
    "rectangle26",
    "small",
    "small2",
    "search4",
    "rectangle27",
    "weveLookedItUpYourUsernameIsUnique",
    "search5",
    "rectangle28",
    "small3",
    "small4",
    "search6",
    "rectangle29",
    "small5",
    "small6"
  ],
  infoCard: ["infoCard", "usernameShuriken", "img", "shurikenB051"],
  usernameShuriken: ["usernameShuriken", "img", "shurikenB051"],
  img: ["img"],
  shurikenB051: ["shurikenB051"],
  loginCardPersonal: [
    "loginCardPersonal",
    "frame48",
    "frame45",
    "group7",
    "svg",
    "logoWhite012",
    "frame47",
    "frame46",
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName",
    "search3",
    "rectangle26",
    "small",
    "small2",
    "search4",
    "rectangle27",
    "weveLookedItUpYourUsernameIsUnique",
    "search5",
    "rectangle28",
    "small3",
    "small4",
    "search6",
    "rectangle29",
    "small5",
    "small6"
  ],
  frame48: [
    "frame48",
    "frame45",
    "group7",
    "svg",
    "logoWhite012",
    "frame47",
    "frame46",
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName",
    "search3",
    "rectangle26",
    "small",
    "small2",
    "search4",
    "rectangle27",
    "weveLookedItUpYourUsernameIsUnique",
    "search5",
    "rectangle28",
    "small3",
    "small4",
    "search6",
    "rectangle29",
    "small5",
    "small6"
  ],
  frame45: ["frame45", "group7", "svg", "logoWhite012"],
  group7: ["group7", "svg", "logoWhite012"],
  svg: ["svg"],
  logoWhite012: ["logoWhite012"],
  frame47: [
    "frame47",
    "frame46",
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName",
    "search3",
    "rectangle26",
    "small",
    "small2",
    "search4",
    "rectangle27",
    "weveLookedItUpYourUsernameIsUnique",
    "search5",
    "rectangle28",
    "small3",
    "small4",
    "search6",
    "rectangle29",
    "small5",
    "small6"
  ],
  frame46: [
    "frame46",
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName",
    "search3",
    "rectangle26",
    "small",
    "small2",
    "search4",
    "rectangle27",
    "weveLookedItUpYourUsernameIsUnique",
    "search5",
    "rectangle28",
    "small3",
    "small4",
    "search6",
    "rectangle29",
    "small5",
    "small6"
  ],
  group84: [
    "group84",
    "search",
    "rectangle24",
    "lastName",
    "search2",
    "rectangle25",
    "firstName"
  ],
  search: ["search", "rectangle24", "lastName"],
  rectangle24: ["rectangle24"],
  lastName: ["lastName"],
  search2: ["search2", "rectangle25", "firstName"],
  rectangle25: ["rectangle25"],
  firstName: ["firstName"],
  search3: ["search3", "rectangle26", "small", "small2"],
  rectangle26: ["rectangle26"],
  small: ["small", "small2"],
  small2: ["small2"],
  search4: ["search4", "rectangle27", "weveLookedItUpYourUsernameIsUnique"],
  rectangle27: ["rectangle27"],
  weveLookedItUpYourUsernameIsUnique: ["weveLookedItUpYourUsernameIsUnique"],
  search5: ["search5", "rectangle28", "small3", "small4"],
  rectangle28: ["rectangle28"],
  small3: ["small3", "small4"],
  small4: ["small4"],
  search6: ["search6", "rectangle29", "small5", "small6"],
  rectangle29: ["rectangle29"],
  small5: ["small5", "small6"],
  small6: ["small6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  inboardingCards: "div";
  infoCard: "div";
  usernameShuriken: "div";
  img: "img";
  shurikenB051: "div";
  loginCardPersonal: "div";
  frame48: "div";
  frame45: "div";
  group7: "div";
  svg: "svg";
  logoWhite012: "div";
  frame47: "div";
  frame46: "div";
  group84: "div";
  search: "div";
  rectangle24: "div";
  lastName: "div";
  search2: "div";
  rectangle25: "div";
  firstName: "div";
  search3: "div";
  rectangle26: "div";
  small: "div";
  small2: "div";
  search4: "div";
  rectangle27: "div";
  weveLookedItUpYourUsernameIsUnique: "div";
  search5: "div";
  rectangle28: "div";
  small3: "div";
  small4: "div";
  search6: "div";
  rectangle29: "div";
  small5: "div";
  small6: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomepage__Fetches;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inboardingCards: makeNodeComponent("inboardingCards"),
    infoCard: makeNodeComponent("infoCard"),
    usernameShuriken: makeNodeComponent("usernameShuriken"),
    img: makeNodeComponent("img"),
    shurikenB051: makeNodeComponent("shurikenB051"),
    loginCardPersonal: makeNodeComponent("loginCardPersonal"),
    frame48: makeNodeComponent("frame48"),
    frame45: makeNodeComponent("frame45"),
    group7: makeNodeComponent("group7"),
    svg: makeNodeComponent("svg"),
    logoWhite012: makeNodeComponent("logoWhite012"),
    frame47: makeNodeComponent("frame47"),
    frame46: makeNodeComponent("frame46"),
    group84: makeNodeComponent("group84"),
    search: makeNodeComponent("search"),
    rectangle24: makeNodeComponent("rectangle24"),
    lastName: makeNodeComponent("lastName"),
    search2: makeNodeComponent("search2"),
    rectangle25: makeNodeComponent("rectangle25"),
    firstName: makeNodeComponent("firstName"),
    search3: makeNodeComponent("search3"),
    rectangle26: makeNodeComponent("rectangle26"),
    small: makeNodeComponent("small"),
    small2: makeNodeComponent("small2"),
    search4: makeNodeComponent("search4"),
    rectangle27: makeNodeComponent("rectangle27"),
    weveLookedItUpYourUsernameIsUnique: makeNodeComponent(
      "weveLookedItUpYourUsernameIsUnique"
    ),
    search5: makeNodeComponent("search5"),
    rectangle28: makeNodeComponent("rectangle28"),
    small3: makeNodeComponent("small3"),
    small4: makeNodeComponent("small4"),
    search6: makeNodeComponent("search6"),
    rectangle29: makeNodeComponent("rectangle29"),
    small5: makeNodeComponent("small5"),
    small6: makeNodeComponent("small6"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */