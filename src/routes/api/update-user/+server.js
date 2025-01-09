import {error , json , redirect} from "@sveltejs/kit";

export async function GET({ params, url, cookies, request, locals }) {


	const userId = params.id; // Assuming the user ID is passed as a URL parameter
	const userData = await getUserData(userId); // Assume getUserData is a function that fetches user data
	return json(userData);
}

// is like next js , also make   throw redirect(302,'/blog') to redirect to another page