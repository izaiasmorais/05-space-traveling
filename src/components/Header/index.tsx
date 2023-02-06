import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full max-w-[1120px] py-[2.5rem] mx-auto">
      <div className="w-full max-w-[700px] mx-auto">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </div>
    </div>
  );
}
