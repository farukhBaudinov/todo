import s from "./Nav.module.scss";
import MailIcon from "../../../ui/icons/MailIcon";
import StarIcon from "../../../ui/icons/StarIcon";
import CheckIcon from "../../../ui/icons/CheckIcon";
import BasketIcon from "../../../ui/icons/BasketIcon";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { title: "Мои задачи", href: "/", icon: <MailIcon /> },
  { title: "Важные", href: "/importants", icon: <StarIcon /> },
  { title: "Выполненные", href: "/completed", icon: <CheckIcon /> },
  { title: "Удаленные", href: "/deleted", icon: <BasketIcon /> },
];

const Nav = () => {
  const router = useRouter()

  return (
    <nav className={s.nav}>
      <div className={s.wrapper}>
        {navigation.map((i, idx) => (
          <Link href={i.href} key={idx}>
            <a className={[s.item, router.route === i.href ? s.active : ''].join(' ')}>
              {i.icon}
              <span>{i.title}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
