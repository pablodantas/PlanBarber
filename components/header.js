import Link from "next/link"

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col pt-2 d-flex justify-content-center">
                            <Link href="/" legacyBehavior>
                                <a>
                                    <img src="images/logo.png" alt="" className="img_logo" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}