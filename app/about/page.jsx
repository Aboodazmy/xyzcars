import About from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";
import { response } from "@/app/data";

export const metadata = {title: 'من نحن'}

export default async function Page () {

    // const response = await api('default');
    // if ( !response.settings ) return <Maintenance />
    // if ( !response.settings.active ) return <Maintenance />

    return <About settings={response.settings}/>
        
}
