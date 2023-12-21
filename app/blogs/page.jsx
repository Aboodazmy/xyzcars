import Blogs from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";
import { response } from "@/app/data";

export const metadata = {title: 'المقالات'}

export default async function Page () {

    // const response = await api('blogs');
    // if ( !response.settings ) return <Maintenance />
    // if ( !response.settings.active ) return <Maintenance />

    response['data'] = response.blogs;
    return <Blogs data={response}/>

}
