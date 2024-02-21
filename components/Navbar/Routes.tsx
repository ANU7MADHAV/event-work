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
            <h1 className="text-[#A2783A]">{link.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routes;
