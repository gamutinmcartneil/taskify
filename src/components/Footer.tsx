import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="">
            <div className="flex justify-between p-5">
                <div className="col-6 text-start">
                    <ul className="list-inline flex gap-x-5">
                        <li className="">
                            <Link className="text-sm" href="#">Support</Link>
                        </li>
                        <li className="">
                            <Link className="text-sm" href="#">Help Center</Link>
                        </li>
                        <li className="">
                            <Link className="text-sm" href="#">Privacy</Link>
                        </li>
                        <li className="">
                            <Link className="text-sm" href="#">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <p className="mb-0 text-base">
                        © 2025 - <Link className="text-muted" href="/">Sparklates</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}