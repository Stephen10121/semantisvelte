<script lang="ts">
    export let title: string | null = null;
    export let role: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "docs" = "default";
    export let darker = false;

    export let width = "auto";
    export let height = "auto";
</script>

<button {title} on:click on:dblclick style="height:{height};width: {width};" class="{role}{darker ? " darker" : ""}">
    <slot />
</button>

<style>
    button {
        --button-text-color: var(--nuetral-text-color);
        --button-background-color: var(--nuetral-color);
        --button-background-opacity: 0;
        background-color: var(--button-background-color);
        color: var(--button-text-color);
        border: none;
        outline: 0 solid var(--button-background-color);
        cursor: pointer;
        font-family: var(--primary-font);
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        transition: background-color 0.15s linear, color 0.15s linear, outline-width 0.05s linear, filter 0.10s linear;
    }
    
    button.primary {
        --button-background-color: var(--primary-color);
        --button-text-color: var(--primary-text-color);
    }
    button.secondary {
        --button-background-color: var(--secondary-color);
        --button-text-color: var(--secondary-text-color);
    }
    button.accent {
        --button-background-color: var(--accent-color);
        --button-text-color: var(--accent-text-color);
    }
    button.info {
        --button-background-color: var(--info-color);
        --button-text-color: var(--info-text-color);
    }
    button.success {
        --button-background-color: var(--success-color);
        --button-text-color: var(--success-text-color);
    }
    button.warning {
        --button-background-color: var(--warning-color);
        --button-text-color: var(--warning-text-color);
    }
    button.error {
        --button-text-color: var(--error-text-color);
        --button-background-color: var(--error-color);
    }

    button.darker {
        --button-background-opacity: 0.192;
    }

    button.docs {
        background-color: rgba(0, 0, 0, var(--button-background-opacity));
    }
    
    button.docs:hover {
        --button-background-opacity: 0.4;
    }
    button:not(.docs):hover {
        filter: brightness(80%);
    }

    button:not(.docs):active {outline-width: 3px}
</style>