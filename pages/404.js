import Link from 'next/link';

export default function errorPage() {

    return (
        <div>
            Hmmm..... you're princess is in another castle
            <Link href='/index'><a> Back to Main Menu</a></Link>
        </div>
    )

}
