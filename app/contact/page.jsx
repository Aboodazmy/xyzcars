import Contact from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";
import { response } from "@/app/data";

export const metadata = {title: 'تواصل معنا'}

export default async function Page () {
    
    // const response = await api('default');
    // if ( !response.settings ) return <Maintenance />
    // if ( !response.settings.active ) return <Maintenance />

    return <Contact settings={response.settings}/>
        
}
