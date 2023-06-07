<script lang="ts">
	import { browser } from "$app/environment";

    export let light: boolean;
    export let name: string;

    $: {
        if (browser) {
            document.documentElement.style.setProperty(name, light ? "#ffffffc2" : "#0000009f");
        }
    }

</script>

<label for={name}>
    <p><slot /></p>
    <input type="checkbox" {name} id={name} bind:checked={light} />
</label>

<style>
    label {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }

    p {
        font-family: sans-serif;
    }

    input {
        cursor: pointer;
        padding: 0;
        outline: none;
        border: 1px solid #000000;
        background: none;
        height: 50px;
        width: 50px;
        padding: 5px;
        background-color: #ffffff;
        border-radius: 5px;
    }

    input:focus {
        outline: 1px solid #000000;
    }
</style>