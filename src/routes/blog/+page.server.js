import { error } from "@sveltejs/kit";
import { MESSAGE } from "$env/static/private";

/**@type {import ('./$types').PageLoad} */

export async function load(event) {



    const response = await event.fetch('/api/time');
    const { now } = await response.json();

    return {

        title: 'Blog Page',
        content: 'welcome to the blog page',
        env: MESSAGE,
        time: now
}
error({ status: 404, message: 'Page not found' });

}




// run on the server and the client dont put database calls or environment variables here
// use +page.server.js for server side rendering if you want to call the db or use environment variables