import Link from "next/link";
import link from "next/link";

const Routes = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path!}>
              <h1 className="text-[#A2783A]">{link.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routes;
