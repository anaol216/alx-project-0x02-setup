
import Link from 'next/link';
export const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/post">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}