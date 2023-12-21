"use client";
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Features from "@/app/component/features";
import Cards from "@/app/component/cards";
import { Fragment } from "react";
import Link from "next/link";

export default function Home ({ data }) {

    return (

        <Fragment>

            <Nav settings={data.settings}/>
            
            <Chat settings={data.settings}/>

            <Header settings={data.settings}/>

            <div className="home">

                <Features settings={data.settings}/>

                <Cards data={data.categories.slice(0, 8)} title="البرندات العالمية" category/>

                <main className="more">

                    <div className="full-width flex flex-end">

                        <Link href="/categories">
                            <span className="material-symbols-outlined">arrow_back</span>
                            <p>المزيد من البرندات</p>
                        </Link>
                        
                    </div>
                    
                    <div className="hr"><p>تابع أحدث العروض - والمزادات الجديدة</p></div>

                </main>

                <Cards data={data.products} title="أحدث السيارات" slider/>

                <Cards data={data.products} title="أحدث العروض" slider/>

                <Cards data={data.blogs} title="أحدث المقالات" slider blog count={3}/>

            </div>

            <Footer settings={data.settings}/>

        </Fragment>

    )

}
