import { links } from "../../links";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>リンク一覧</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map(({ href, label }) => (
          <li key={href} style={{ margin: "10px 0" }}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0070f3", textDecoration: "none" }}
            >
              {label} / {href}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
