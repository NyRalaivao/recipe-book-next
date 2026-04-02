import './globals.css'

export const metadata = {
  title: 'Recipe Book',
  description: 'A collection of delicious recipes',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}