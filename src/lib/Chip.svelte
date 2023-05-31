<script lang="ts">
    export let title: string | null = null;
    export let role: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" = "default";
</script>

<div {title} class={role}>
    <slot />
</div>

<style>
    div {
        --button-text-color: var(--text-color);
        --button-background-color: var(--nuetral-color);
        background-color: var(--button-background-color);
        color: var(--button-text-color);
        border: none;
        padding: 2px 10px;
        font-family: var(--primary-font);
        font-size: 1rem;
        font-weight: bold;
        border-radius: 100vh;
        transition: background-color 0.15s linear, color 0.15s linear;
    }
    
    div.default {--button-text-color: var(--text-color-light)}
    div.primary {--button-background-color: var(--primary-color)}
    div.secondary {--button-background-color: var(--secondary-color)}
    div.accent {--button-background-color: var(--accent-color)}
    div.info {--button-background-color: var(--info-color)}
    div.success {--button-background-color: var(--success-color)}
    div.warning {--button-background-color: var(--warning-color)}
    div.error {--button-text-color: var(--text-color-light);--button-background-color: var(--error-color)}
</style>