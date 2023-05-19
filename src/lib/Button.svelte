<script lang="ts">
    export let title: string | null = null;
    export let role: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" = "default";

    export let width = "auto";
    export let height = "auto";
</script>

<button {title} on:click on:dblclick style="height:{height};width: {width};" class="{role}">
    <slot />
</button>

<style>
    button {
        --button-text-color: var(--text-color);
        --button-background-color: var(--nuetral-color);
        background-color: var(--button-background-color);
        color: var(--button-text-color);
        border: none;
        outline: 0 solid var(--button-background-color);
        padding: 10px;
        cursor: pointer;
        font-family: var(--primary-font);
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        transition: background-color 0.15s linear, color 0.15s linear, outline-width 0.05s linear, filter 0.10s linear;
    }
    
    button.default {--button-text-color: var(--text-color-light)}
    button.primary {--button-background-color: var(--primary-color)}
    button.secondary {--button-background-color: var(--secondary-color)}
    button.accent {--button-background-color: var(--accent-color)}
    button.info {--button-background-color: var(--info-color)}
    button.success {--button-background-color: var(--success-color)}
    button.warning {--button-background-color: var(--warning-color)}
    button.error {--button-text-color: var(--text-color-light);--button-background-color: var(--error-color)}
    button:hover {filter: brightness(85%)}
    button:active {outline-width: 3px}
</style>