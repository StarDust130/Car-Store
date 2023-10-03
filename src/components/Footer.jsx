import "./../styles/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <h3>StarDust Cars🌟</h3>

        <div className="copyright">
          <p>
            &copy; <span>2023</span> StarDust Car Dealership. All Rights
            Reserved.
          </p>
          <a
            href="https://github.com/StarDust130"
            target="_blank"
            rel=" noreferrer"
          >
            <img className="github-icon"
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
