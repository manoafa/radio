/**
 * Visible when JavaScript is disabled. The full app is still server-rendered for users with JS.
 */
export function NoscriptShell() {
  return (
    <noscript>
      <div
        style={{
          padding: "2rem",
          maxWidth: "28rem",
          margin: "2rem auto",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
          lineHeight: 1.5,
          color: "#111",
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: "0.75rem",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>JavaScript is required</p>
        <p style={{ margin: "0.75rem 0 0", fontSize: "0.875rem", color: "#4b5563" }}>
          Enable JavaScript in your browser to use Radio Madagasikara RMK (102.4 FM).
        </p>
      </div>
    </noscript>
  );
}
