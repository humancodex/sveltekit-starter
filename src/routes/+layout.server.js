import { error } from '@sveltejs/kit';



export async function load() {
	return {
		test: 'Hello layout ',

	};
	error({ status: 404, message: 'Page not found' });
}


//run on the server , like user data

//IS TO PASS DATA TO THE ROUTES OR SUB FOLDERS INSIDE THE ROUTES FOLDER

