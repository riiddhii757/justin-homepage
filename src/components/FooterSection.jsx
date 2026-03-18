import React from "react";

function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-[#16171d] mt-12">
      <div className="text-center mb-4 text-gray-700 dark:text-gray-300">
        © 2026 Just In. All rights reserved.
      </div>
      <div className="flex justify-center gap-6 text-purple-700">
        <a href="#">GitHub</a>
        <a href="#">Discord</a>
        <a href="#">X.com</a>
        <a href="#">Bluesky</a>
      </div>
    </footer>
  );
}

export default Footer;