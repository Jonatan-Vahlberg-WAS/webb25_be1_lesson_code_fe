export default function Header({ onLoginClick }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <svg
            className="brand-icon"
            viewBox="0 0 24 24"
            fill="none"
            width="28"
            height="28"
          >
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2a10 10 0 0 1 0 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
          <span className="brand-name">Motify</span>
        </div>
        <nav className="header-nav">
          <button className="btn-ghost" onClick={onLoginClick}>
            Log in
          </button>
        </nav>
      </div>
    </header>
  );
}
