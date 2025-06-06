import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="">
            <div className="flex justify-between p-5">
                <div className="col-6 text-start">
                    <ul className="list-inline flex gap-x-5">
                        <li className="">
                            <a className="text-sm" href="#">Support</a>
                        </li>
                        <li className="">
                            <a className="text-sm" href="#">Help Center</a>
                        </li>
                        <li className="">
                            <a className="text-sm" href="#">Privacy</a>
                        </li>
                        <li className="">
                            <a className="text-sm" href="#">Terms of Service</a>
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