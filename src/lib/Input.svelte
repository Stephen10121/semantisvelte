<script lang="ts">
    export let title: string | null = null;
    export let role: "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" = "default";
    export let name: string = "";
    export let value: any = null;
    export let placeholder: string | null = null;
    export let width = "auto";
    export let height = "50px";
</script>

<input {title} style="width:{width};height:{height};" class={role} {name} {value} {placeholder} />

<style>
    input {
        --button-background-color: var(--nuetral-color);
        background: none;
        color: var(--base-text-color);
        border: 1px solid var(--button-background-color);
        padding: 2px 10px;
        font-family: var(--primary-font);
        font-size: 1rem;
        font-weight: bold;
        border-radius: 10px;
        transition: color 0.15s linear, outline 0.05s linear;
    }
    
    input.primary {--button-background-color: var(--primary-color)}
    input.secondary {--button-background-color: var(--secondary-color)}
    input.accent {--button-background-color: var(--accent-color)}
    input.info {--button-background-color: var(--info-color)}
    input.success {--button-background-color: var(--success-color)}
    input.warning {--button-background-color: var(--warning-color)}
    input.error {--button-background-color: var(--error-color)}

    input:focus {
        outline: 2px solid var(--button-background-color);
        outline-offset: 2px;
    }

    input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--base-text-color);
        opacity: 1; /* Firefox */
    }

    input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--base-text-color);
    }

    input::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--base-text-color);
    }
</style>