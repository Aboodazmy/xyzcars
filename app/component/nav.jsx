"use client";
import Sidebar from "@/app/component/sidebar";
import { Fragment } from "react";
import Link from "next/link";

export default function Nav ({ settings }) {

    return (

        <Fragment>

            <div className="nav base-nav">

                <main className="flex">

                    <ul className="full-width flex flex-space">

                        <div className="flex">

                            <Link href="/contact" className="flex nav-icon">تواصل معنا</Link>
                            <Link href="/about" className="flex nav-icon">من نحن</Link>
                            <Link href="/blogs" className="flex nav-icon">المقالات</Link>
                            <Link href="/brands" className="flex nav-icon">البرندات</Link>
                            <Link href="/" className="flex nav-icon">الرئسية</Link>

                        </div>

                        <div className="flex">

                            <Link href="/" className="logo">
                                <span>{settings.name}</span>
                            </Link>
                            
                            <div className="show-side flex flex-start pointer">
                                <span className="material-symbols-outlined go-icon">menu</span>
                            </div>

                        </div>

                    </ul>

                </main>

            </div>

            <div className="nav-sep"></div>

            <Sidebar settings={settings}/>

        </Fragment>

    )

}
