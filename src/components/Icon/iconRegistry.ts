import type { ComponentType, SVGProps } from "react";

import ChevronDownLinedIcon from "@/assets/icons/chevron-down-lined.svg?react";
import ChevronLeftLinedIcon from "@/assets/icons/chevron-left-lined.svg?react";
import ChevronRightLinedIcon from "@/assets/icons/chevron-right-lined.svg?react";
import ChevronUpLinedIcon from "@/assets/icons/chevron-up-lined.svg?react";
import DeleteLinedIcon from "@/assets/icons/delete-lined.svg?react";
import HelpCircleFilledIcon from "@/assets/icons/help-circle-filled.svg?react";
import HomeFilledIcon from "@/assets/icons/home-filled.svg?react";
import HomeLinedIcon from "@/assets/icons/home-lined.svg?react";
import ListFilledIcon from "@/assets/icons/list-filled.svg?react";
import ListLinedIcon from "@/assets/icons/list-lined.svg?react";
import SearchLinedIcon from "@/assets/icons/search-lined.svg?react";
import UserFilledIcon from "@/assets/icons/user-filled.svg?react";
import UserLinedIcon from "@/assets/icons/user-lined.svg?react";

type SvgIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const iconRegistry = {
  "chevron-down-lined": ChevronDownLinedIcon,
  "chevron-left-lined": ChevronLeftLinedIcon,
  "chevron-right-lined": ChevronRightLinedIcon,
  "chevron-up-lined": ChevronUpLinedIcon,
  "delete-lined": DeleteLinedIcon,
  "help-circle-filled": HelpCircleFilledIcon,
  "home-filled": HomeFilledIcon,
  "home-lined": HomeLinedIcon,
  "list-filled": ListFilledIcon,
  "list-lined": ListLinedIcon,
  "search-lined": SearchLinedIcon,
  "user-filled": UserFilledIcon,
  "user-lined": UserLinedIcon,
} as const satisfies Record<string, SvgIconComponent>;

export type IconName = keyof typeof iconRegistry;
