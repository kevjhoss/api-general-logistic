import {headers} from './header.ts';
import {sucursal} from './datasGeneral.ts';

export const getSucursal = async (req) => {
  if (req.method === "POST") {
    const datas = sucursal[await req.text()];
    return new Response(JSON.stringify(datas), headers("json"));
  }
}
