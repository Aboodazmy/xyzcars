import Blog from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";
import { response } from "@/app/data";

export const metadata = {}

export default async function Page ({ params }) {

    // const response = await api('blog', {id: params.id});
    // if ( !response.settings ) return <Maintenance />
    // if ( !response.settings.active ) return <Maintenance />

    response['data'] = response.blogs[0];
    metadata.title = response.data.title;
    return <Blog data={response}/>
        
}
