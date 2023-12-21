"use client";
import Stars from "@/app/component/stars";
import Link from "next/link";

export default function Header ({ settings }) {

    return (

        <header>

            <main className='flex flex-space hero-section'>

                <div className="image flex layer">
                    <div></div>
                    <img src="/media/public/header.png"/>
                </div>

                <div className='flex flex-column info'>
                
                    <div className='full-width flex flex-end'><Stars count={5}/></div>
                    <ul className='full-width flex flex-end'>
                        <li>لا إيداع</li> <li>توصيل سريع</li> <li>24/7 دعم</li>
                    </ul>
                    <h1 className='full-width flex flex-end'>أحدث البرندات والسيارات الجديدة فى الإمارات - x,y,z</h1>
                    <p className='full-width flex flex-end'>
                        الإمارات العربية المتحدة موجودة بها جميع السيارات الجديدة فى العالم
                        الإمارات العربية المتحدة موجودة بها جميع السيارات
                    </p>
                    <div className='full-width flex flex-end buttons'>
                        <Link href="/brands">
                            <span className='material-symbols-outlined icon'>arrow_back</span>
                            <span>تصفح السيارات</span>
                        </Link>
                    </div>
                    
                </div>

            </main>

        </header>

    )

}
