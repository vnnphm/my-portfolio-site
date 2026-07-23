import portrait from "../images/portrait.png";

export default function Decor() {
  return (
    <img
      src={portrait}
      alt="Portrait of Vinny Pham"
      className="absolute right-6 top-16 hidden h-56 w-56 object-cover sm:right-10 lg:block"
    />
  );
}
