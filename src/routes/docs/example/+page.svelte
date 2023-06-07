<script lang="ts">
	import { onDestroy } from "svelte";
	import { testTheme } from "../../../functions/store.js";
	import { browser } from "$app/environment";
	import ColorChanger from "$lib/ColorChanger.svelte";
	import CheckBoxChanger from "$lib/CheckBoxChanger.svelte";

    let primaryColor: string = "#dfdfdf";
    let testThemeData = "";
    const testThemeUnsubscribe = testTheme.subscribe(value => testThemeData = value);

    function setCSSVariable(variableName: string, variableValue: Event) {
        //@ts-ignore
        document.documentElement.style.setProperty(variableName, variableValue.target.value);
    }

    $: {
        if (browser) {
            document.documentElement.style.setProperty('--base-color-tester', primaryColor);
        }
    }

    onDestroy(() => {
        testThemeUnsubscribe();
    });
</script>

<section style="--test-primary-color: {primaryColor};">
    <h1>Try it yourself</h1>
    <ColorChanger name="--base-color-tester" color="#dfdfdf">Base Color</ColorChanger>
    <CheckBoxChanger name="--base-text-color-tester" light={true}>Base Color Light</CheckBoxChanger>
    <input type="checkbox" name="" id="">
    <ColorChanger name="--primary-color-tester" color="#86efac">Primary Color</ColorChanger>
    <ColorChanger name="--secondary-color-tester" color="#16253d">Secondary Color</ColorChanger>
    <!-- <label for="primary">
        <p>Primary</p>
        <input type="color" name="primary" id="primary" bind:value={primaryColor} on:change={(e) => setCSSVariable('--base-color-tester', e)} />
    </label> -->
    <button on:click={() => {
        testTheme.set("testerTheme");
    }}>ee</button>
</section>


<style>
    :global(.themeSetter.testerTheme) {
        --text-color: #0000009f;
        --text-color-light: #ffffffc2;

        --primary-color: var(--primary-color-tester);
        --primary-text-color: var(--text-color);

        --secondary-color: var(--secondary-color-tester);
        --secondary-text-color: var(--text-color-light);

        --accent-color: #8b5cf6;
        --accent-text-color: var(--text-color);

        --nuetral-color: #374151;
        --nuetral-text-color: var(--text-color-light);

        --base-color: var(--base-color-tester);
        --base-text-color: var(--base-text-color-tester);

        --info-color: #7BE0F4;
        --info-text-color: var(--text-color);

        --success-color: #18D898;
        --success-text-color: var(--text-color);

        --warning-color: #eab308;
        --warning-text-color: var(--text-color);

        --error-color: #b91c1c;
        --error-text-color: var(--text-color-light);

        --primary-font: system-ui;
        --secondary-font: sans-serif;
    }
    section {
        width: 100%;
        height: 100%;
    }
</style>