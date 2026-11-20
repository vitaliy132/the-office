export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Our Events" },
  { href: "/artists", label: "Our Artists" },
  { href: "/tickets", label: "Tickets" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const bareRoutes = [
  "/",
  "/home",
  "/about",
  "/events",
  "/artists",
  "/tickets",
  "/portfolio",
  "/contact",
] as const;

export function isBareRoute(pathname: string) {
  return bareRoutes.some((route) => route === pathname);
}
