import "./globals.css"

export const metadata = {
  title: "IMdb Clone",
  description: "This is the imdb clone",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
