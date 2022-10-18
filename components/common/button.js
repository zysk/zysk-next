import Link from "next/link";

const Button = ({ text, variant, url }) => {
  const btnClass = variant === "black" ? "btn-black" : "btn-red";
  return (
    <Link href={url}>
      <a
        className={`capitalize btn-custom btn-black mr-4 mb-2 px-12 py-2 ${btnClass}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
