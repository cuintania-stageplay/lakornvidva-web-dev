import StyledComponentsRegistry from './lib/registry'
import "./globals.css";

export const metadata = {
    title: "LakornVidva - ละครวิดวะ",
    description:
        "ละครเวทีของนิสิต วิศวฯ จุฬาฯ ที่จะพาคุณมาร่วมค้นหา 'หน้าตาความสำเร็จ' ของตัวเอง ผ่านเรื่องราวของหนทางไปสู่ประตูนิรันดร์ ประตูแห่งความสำเร็จในชีวิต",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>    
            </body>
        </html>
    );
}
