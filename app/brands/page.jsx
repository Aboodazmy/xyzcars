import Categories from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";
import { response } from "@/app/data";

export const metadata = {title: 'البرندات العالمية'}

export default async function Page () {

    // const response = await api('default');
    // if ( !response.settings ) return <Maintenance />
    // if ( !response.settings.active ) return <Maintenance />

    metadata.title = response.settings.name;
    return <Categories data={response}/>

}
