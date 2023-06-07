<script lang="ts">
	import { browser } from "$app/environment";

    export let color: string;
    export let name: string;

    $: {
        if (browser) {
            document.documentElement.style.setProperty(name, color);
        }
    }

</script>

<label for={name}>
    <p><slot /></p>
    <input type="color" {name} id={name} bind:value={color} />
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