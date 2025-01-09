import { redirect } from '@sveltejs/kit';
import { transformWithEsbuild } from 'vite';



export async function load() {


        throw redirect(302, '/blog');
}







// run on the server and the client dont put database calls or environment variables here
// use +page.server.js for server side rendering if you want to call the db or use environment variables