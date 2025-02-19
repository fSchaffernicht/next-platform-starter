import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <head></head>
            <body className="min-h-screen p-0 m-0 bg-indigo-900 text-white">
                <div>{children}</div>
            </body>
        </html>
    );
}
