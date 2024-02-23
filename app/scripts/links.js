import {
  UserCircleIcon,
  HomeIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Badge",
    href: "/badge",
    icon: UserCircleIcon,
  },
  {
    name: "Follow the pointer",
    href: "/follow-the-pointer",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Text Input",
    href: "/text-input",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Form Builder",
    href: "/form-builder",
    icon: NewspaperIcon,
  },
];

export default links;