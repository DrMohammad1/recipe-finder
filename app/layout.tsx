export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Recipe Finder</title>
                {/* Add any other head elements here, like meta tags or links to stylesheets */}
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}