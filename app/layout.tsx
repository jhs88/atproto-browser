export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Ft-CpRXefaiprzpKZCqaZZWvvWMBcuFvAhkv-l3f8vU"
        />
      </head>
      <body>
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "fc315829568c403788332c6f16ba678b"}'
        />
      </body>
    </html>
  );
}
