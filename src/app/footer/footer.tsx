import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <nav className="level">

        <p className="level-item has-text-centered">
          <a className="link is-info" href="https://java.no" target="_blank" rel="noopener noreferrer">
            About JavaBin
          </a>
        </p>

        <p className="level-item has-text-centered">
          <a className="link is-info" href="https://java.no/principles" target="_blank" rel="noopener noreferrer">
            Code of Conduct
          </a>
        </p>

        <p className="level-item has-text-centered">
          <a className="link is-info" href="mailto:javazone@java.no">Mail</a>
        </p>

        <p className="level-item has-text-centered">
          <Image src="/logo-sharp.svg" alt="" height={48} width={48} />
        </p>

        <p className="level-item has-text-centered">
          <a className="link is-info" href="https://facebook.com/javazoneconference" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>

        <p className="level-item has-text-centered">
          <a className="link is-info" href="https://twitter.com/javazone" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>

        <p className="level-item has-text-centered">
          <a className="link is-info" href="https://www.linkedin.com/company/javazone" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>

      </nav>
    </footer>
  )
}
