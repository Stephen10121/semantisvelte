<script lang="ts">
    export let theme: string = "system";
    export let customThemes: {id: string, themeClass: string}[] = [];

    let theme2: string;

    $: {
        if (theme === "dark") {
            theme2 = "themeSetter-dark";
        } else if (theme === "system") {
            theme2 = "themeSetter-system";
        } else if (theme === "light") {
            theme2 = "themeSetter-light";
        } else if (theme.length !== 0 && customThemes.length!==0) {
            let themeNotFound = true;
            for (let i=0;i<customThemes.length;i++) {
                if (customThemes[i].id === theme) {
                    theme2 = customThemes[i].themeClass;
                    themeNotFound = false;
                }
            }
            if (themeNotFound) {
                theme2 = "themeSetter-light";
            }
        } else {
            theme2 = "themeSetter-light";
        }
    }
</script>

<section class="themeSetter {theme2}">
    <slot />
</section>

<style>
    .themeSetter {
        width: 100%;
        height: 100%;
        background-color: var(--base-color);
        transition: background-color 0.15s linear;
    }

    .themeSetter.themeSetter-light {
        --primary-color: rgb(18, 70, 26);
        --base-color: #dfdfdf;
    }

    .themeSetter.themeSetter-dark {
        --primary-color: #15ca33;
        --base-color: #000000;
    }

    @media (prefers-color-scheme: dark) {
        .themeSetter.themeSetter-system {
            --primary-color: #15ca33;
            --base-color: #000000;
        }
    }

    @media (prefers-color-scheme: light) {
        .themeSetter.themeSetter-system {
            --primary-color: rgb(18, 70, 26);
            --base-color: #dfdfdf;
        }
    }
</style>