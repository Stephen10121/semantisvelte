<script lang="ts">
    import checkSvg from "../assets/check.svg";
    import infoSvg from "../assets/info.svg";
    import warningSvg from "../assets/warning.svg";
    import errorSvg from "../assets/error.svg";

    export let role: "default" | "info" | "success" | "warning" | "error" = "default";
</script>

<div class={role}>
    {#if role==="success"}
        <img src={checkSvg} alt="Check Mark" />
    {:else if role==="warning"}
        <img src={warningSvg} alt="Warning Mark" />
    {:else if role==="error"}
        <img src={errorSvg} alt="Error Mark" />
    {:else}
        <img src={infoSvg} alt="Information Mark" />
    {/if}
    <p><slot /></p>
</div>

<style>
    div {
        --button-text-color: var(--nuetral-text-color);
        --button-background-color: var(--nuetral-color);
        width: 100%;
        height: 60px;
        background-color: var(--button-background-color);
        color: var(--button-text-color);
        border: none;
        padding: 2px 10px;
        font-family: var(--primary-font);
        font-size: 1rem;
        font-weight: bold;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        padding: 20px 15px;
        transition: background-color 0.15s linear, color 0.15s linear;
    }

    div img {
        height: 100%;
    }
    
    div.info {
        --button-background-color: var(--info-color);
        --button-text-color: var(--info-text-color);
    }
    div.success {
        --button-background-color: var(--success-color);
        --button-text-color: var(--success-text-color);
    }
    div.warning {
        --button-background-color: var(--warning-color);
        --button-text-color: var(--warning-text-color);
    }
    div.error {
        --button-text-color: var(--error-text-color);
        --button-background-color: var(--error-color);
    }
</style>