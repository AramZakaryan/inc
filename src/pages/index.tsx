import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <div>
            gago
            <nav>
                <Link href="/login">go login</Link>
            </nav>
        </div>
    );
}
