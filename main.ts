import {serve} from './deps.ts';
import {headers} from './header.ts';
import {getSucursal} from './router.ts';

const handler = async (req: Request): Promise<Response> => {
  const pathname = new URL(req.url).pathname;
  if (pathname === '/getSucursal') return getSucursal(req);
}

const env = Deno.env.get('PORT');
const port = env ? Number(env) : 3500;

serve(handler, {port});
