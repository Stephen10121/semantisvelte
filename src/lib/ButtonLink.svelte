<script lang="ts">
    export let title: string | null = null;
    export let role: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "docs" = "default";
    export let darker = false;
    export let href: string;

    export let width = "auto";
    export let height = "auto";
</script>

<a {title} {href} style="min-height:{height};width: {width};" class="{role}{darker ? " darker" : ""}">
    <slot />
</a>

<style>
    a {
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
        font-weight: 500;
        letter-spacing: 0px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        transition: background-color 0.15s linear, color 0.15s linear, outline-width 0.05s linear, filter 0.10s linear;
    }
    
    a.primary {
        --button-background-color: var(--primary-color);
        --button-text-color: var(--primary-text-color);
    }
    a.secondary {
        --button-background-color: var(--secondary-color);
        --button-text-color: var(--secondary-text-color);
    }
    a.accent {
        --button-background-color: var(--accent-color);
        --button-text-color: var(--accent-text-color);
    }
    a.info {
        --button-background-color: var(--info-color);
        --button-text-color: var(--info-text-color);
    }
    a.success {
        --button-background-color: var(--success-color);
        --button-text-color: var(--success-text-color);
    }
    a.warning {
        --button-background-color: var(--warning-color);
        --button-text-color: var(--warning-text-color);
    }
    a.error {
        --button-text-color: var(--error-text-color);
        --button-background-color: var(--error-color);
    }
    a.darker {
        --button-background-opacity: 0.192;
    }

    a.docs {
        background-color: rgba(0, 0, 0, var(--button-background-opacity)) !important;
        --button-text-color: var(--nuetral-text-color);
    }

    a:not(.docs):hover {
        filter: brightness(80%);
    }
    
    a:hover {
        --button-background-opacity: 0.4;
    }
    a:not(.docs):active {outline-width: 3px}
</style>