import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 mb-0" />

      <div className="flex justify-center">
        <hr />
        <ul className="flex justify-between my-3 mt-4 w-20 text-gray-500 opacity-60 ">
          <li>
            <a href="https://github.com/velozo-ag" target="_blank">
              <GrGithub className="hover:text-white hover:scale-110 transition-all cursor-pointer w-4" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/velozo.ag04/" target="_blank">
              <GrInstagram className="hover:text-white hover:scale-110 transition-all cursor-pointer w-4" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/agustin-velozo-b35849225/"
              target="_blank"
            >
              <GrLinkedin className="hover:text-white hover:scale-110 transition-all cursor-pointer w-4" />
            </a>
          </li>
        </ul>
      </div>

      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-0">
        🍁
        <a
          href="https://www.instagram.com/velozo.ag04/"
          class="hover:underline"
        >
          @velozo-ag
        </a>
        . Made with love.
      </span>
    </div>
  );
}

export default Footer;
