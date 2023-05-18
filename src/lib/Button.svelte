<script lang="ts">
    export let title: string | null = null;
</script>

<button {title} on:click on:dblclick>
    <slot />
</button>

<style>
    button {
        background-color: var(--primary-color);
        color: #ffffff;
        border: none;
        padding: 10px 15px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        border-radius: 25px;
        transition: background-color 0.15s linear;
    }
</style>