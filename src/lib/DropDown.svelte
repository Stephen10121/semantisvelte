<script lang="ts">
    import Button from "$lib/Button.svelte";
	import ButtonLink from "$lib/ButtonLink.svelte";
    import dropdown from "../assets/dropdown.png";

    let open = false;

    let buttonHeight = "30px";

    export let href: string;
    export let title: string;
    export let path: string;
</script>

<div class="big">
    <ButtonLink {href} height={buttonHeight} width="100%" role="docs" darker={path===href}>
        <p class="buttonText">{title}</p>
    </ButtonLink>
    <Button height={buttonHeight} width="100%" role="default" on:click={() => open = !open}>
        <div class="dropdownButton">
            <img src={dropdown} alt="Arrow" style="--rotation: {open ? "0deg" : "180deg"}"/>
        </div>
    </Button>
</div>
<div class="subParent {open ? "show" :"notShow"}">
    <div class="sub">
        <slot />
    </div>
</div>
<style>
    .sub {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 10px;
        overflow: hidden;
        transition: height 1s linear;
    }

    .subParent {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.15s linear;
    }

    .subParent.show {
        animation: expand 0.15s linear forwards;
        grid-template-rows: 1fr;
    }

    .subParent.notShow {
        opacity: 0;
        margin-top: -5px;
    }

    @keyframes expand {
        0% {
            opacity: 0;
        }
        99% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .big {
        display: grid;
        grid-template-columns: calc(100% - 45px) 40px;
        column-gap: 5px;
    }

    .dropdownButton {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }

    .buttonText {
        float: left;
        margin-left: 10px;
    }

    .dropdownButton img {
        height: 20px;
        filter: invert(1);
        user-select: none;
        transform: rotate(var(--rotation));
        transition: transform 0.15s linear;
    }
</style>

