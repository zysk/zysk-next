const Footer = () => {
  const currentyear = new Date().getFullYear();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <footer className="footer p-3 text-center flex justify-between items-center px-8">
      <p>
        &copy; <span id="year">{currentyear}</span> Zysk Technologies
      </p>
      <div className="flex items-center gap-2">
        <a
          href="/posh_policy.pdf"
          className={classNames(
            "  text-white font-medium text-xl lg:text-base py-2 lg:py-0 hover:text-red-500"
          )}
          target="_blank"
        >
          POSH Policy
        </a>
        <a
          href="/IC Member Nomination.pdf"
          className={classNames(
            "  text-white font-medium text-xl lg:text-base py-2 lg:py-0 hover:text-red-500"
          )}
          target="_blank"
        >
          POSH Committee
        </a>
      </div>
    </footer>
  );
};

export default Footer;
