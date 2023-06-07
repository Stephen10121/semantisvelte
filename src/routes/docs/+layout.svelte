<script lang="ts">
	import { page } from "$app/stores";
	import ButtonLink from "$lib/ButtonLink.svelte";
    import DropDown from "$lib/DropDown.svelte";

    let buttonHeight = "30px";
</script>

<section>
    <aside>
        <ButtonLink href="/docs" height={buttonHeight} width="100%" role="docs" darker={$page.url.pathname==="/docs"}><p class="buttonText">Introduction</p></ButtonLink>
        <DropDown href="/docs/getting-started" title="Getting Started" path={$page.url.pathname}>
            <ButtonLink href="/docs/getting-started/installation" height={buttonHeight} width="100%" role="docs" darker={$page.url.pathname==="/docs/getting-started/installation"}><p class="buttonText">Installation</p></ButtonLink>
            <ButtonLink href="#" height={buttonHeight} width="100%" role="docs"><p class="buttonText">Sub Page 2</p></ButtonLink>
            <DropDown path={$page.url.pathname} title="Sub Page 3" href="#">
                <ButtonLink href="#" height={buttonHeight} width="100%" role="docs"><p class="buttonText">Sub Sub Page 1</p></ButtonLink>
                <ButtonLink href="#" height={buttonHeight} width="100%" role="docs"><p class="buttonText">Sub Sub Page 2</p></ButtonLink>
            </DropDown>
        </DropDown>
        <ButtonLink href="/docs/example" darker={$page.url.pathname==="/docs/example"} height={buttonHeight} width="100%" role="docs"><p class="buttonText">Example</p></ButtonLink>
        <ButtonLink href="#" height={buttonHeight} width="100%" role="docs"><p class="buttonText">Page 3</p></ButtonLink>
    </aside>
    <main>
        <slot />
    </main>
</section>

<style>
    section {
        width: 100%;
        height: calc(100% - 70px);
        display: grid;
        grid-template-columns: 300px auto;
    }

    aside {
        height: 100%;
        width: 100%;
        background-color: var(--nuetral-color);
        transition: background-color 0.15s linear;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 5px;
    }

    main {
        width: 100%;
        height: 100%;
        background-color: var(--base-color);
        color: var(--base-text-color);
        transition: background-color 0.15s linear, color 0.15s linear;
    }

    .buttonText {
        float: left;
        margin-left: 10px;
    }
</style>