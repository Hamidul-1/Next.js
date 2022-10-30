import Link from "next/link";

function Error() {
    return (
        <div>
            <h1>This is error page</h1>
            <Link href="/">
                Home
            </Link>
        </div>
    );
}

export default Error;