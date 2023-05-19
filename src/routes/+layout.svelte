<script lang="ts">
    import "../assets/style.css";
	import ThemeSetter from "$lib/ThemeSetter.svelte";

    export let data;

    let theme = data.theme;
    let customThemes = [
        {id: "custom1", themeClass: "myCustomTheme"},
        {id: "custom2", themeClass: "myCustomTheme2"},
        {id: "nothing", themeClass: "nothing"}
    ]

    async function setTheme() {
        fetch("/api/theme", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({"theme": theme})
        });
    }
</script>

<ThemeSetter {theme} {customThemes}>
    <select bind:value={theme} on:change={setTheme}>
        <option value="dark" selected={theme==="dark"}>dark</option>
        <option value="light" selected={theme==="light"}>light</option>
        <option value="custom1" selected={theme==="custom1"}>custom 1</option>
        <option value="custom2" selected={theme==="custom2"}>custom 2</option>
        <option value="nothing" selected={theme==="nothing"}>nothing</option>
        <option value="system" selected={theme==="system"}>system</option>
    </select>
    <slot />
</ThemeSetter>