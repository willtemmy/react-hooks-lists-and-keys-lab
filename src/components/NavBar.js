import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map((lin) => {
    return <a key={lin} href={lin}>{lin}</a>
  })

  return <nav>{/* display an <a> tag for each link here */}
    {link}
  </nav>;
}

export default NavBar;
