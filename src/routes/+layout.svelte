<script lang="ts">
    import "../assets/style.css";
	import ThemeSetter from "$lib/ThemeSetter.svelte";
	import { testTheme } from "../functions/store.js";
	import { onDestroy } from "svelte";

    export let data;

    testTheme.set(data.theme);
    let theme = "";
    const testThemeUnsubscribe = testTheme.subscribe(value => theme = value);

    let customThemes = [
        {id: "custom1", themeClass: "myCustomTheme"},
        {id: "custom2", themeClass: "myCustomTheme2"},
        {id: "nothing", themeClass: "nothing"},
        {id: "testerTheme", themeClass: "testerTheme"}
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

    onDestroy(() => {
        testThemeUnsubscribe();
    });
</script>

<ThemeSetter {theme} {customThemes}>
    <header>
        <a class="title" href="/">SemantiSvelte</a>
        <section>
            <nav>
                <a href="/">Home</a>
                <a href="/docs">Docs</a>
            </nav>
            <select bind:value={$testTheme} on:change={setTheme} title="Choose Theme">
                <option value="dark" selected={theme==="dark"}>Dark</option>
                <option value="light" selected={theme==="light"}>Light</option>
                <option value="custom1" selected={theme==="custom1"}>Custom 1</option>
                <option value="custom2" selected={theme==="custom2"}>Custom 2</option>
                <option value="nothing" selected={theme==="nothing"}>Nothing</option>
                <option value="system" selected={theme==="system"}>System</option>
                <option value="testerTheme" selected={theme==="testerTheme"}>Do it yourself</option>
            </select>
        </section>
    </header>
    <slot />
</ThemeSetter>


<style>
    header {
        width: 100%;
        height: 70px;
        background-color: var(--secondary-color);
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        transition: background-color 0.15s linear;
    }

    section { 
        color: inherit;
        background-color: inherit;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    nav {
        display: flex;
        gap: 10px;
    }

    .title {
        text-decoration: none;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 2rem;
    }

    header a {
        color: inherit;
        /* font-size: 1.1rem; */
        font-family: sans-serif;
    }

    select {
        border: 1px solid var(--nuetral-text-color);
        background: inherit;
        padding: 5px;
        color: inherit;
        border-radius: 5px;
        cursor: pointer;
        font-family: sans-serif;
    }

    select option {
        padding: 5px;
        color: inherit;
    }
</style>