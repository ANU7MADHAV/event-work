import Link from "next/link";

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
      path: "/blog",
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
            <Link href={link.path}>
              <h1 className="text-[#b8d0da]">{link.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routes;
