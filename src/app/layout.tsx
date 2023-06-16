import "./globals.css";

export const metadata = {
    title: "LakornVidva's Official Website",
    description:
        "LakornVidva is a stage play created by Faculty of Engineering, Chulalongkorn University. We make the impossible, possible.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
