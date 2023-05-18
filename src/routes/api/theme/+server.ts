import { dev } from "$app/environment";
import { error, json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
    let body: any;
    try {
        body = await request.json();
    } catch (err) {
        throw error(400, {message: "Missing Body."});
    }

    if (!body.theme) {
        throw error(400, {message: "Missing Parameters."});
    }
    cookies.set("theme", body.theme, {path: "/", secure: !dev});
    return json({ theme: body.theme });
}