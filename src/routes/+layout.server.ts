import { dev } from '$app/environment';

export function load({ cookies }) {
    let theme = cookies.get("theme");
    
    if (!theme) {
        cookies.set("theme", "system", {path: "/", secure: !dev});
        theme = "system"
    }

    return { theme }
}