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
        --primary-color: #86efac;
        --secondary-color: #c04eed;
        --accent-color: #8b5cf6;
        --nuetral-color: #374151;

        --base-color: #d1d5db;

        --info-color: #7BE0F4;
        --success-color: #18D898;
        --warning-color: #fffb00;
        --error-color: #df0e0e;

        --text-color: #0000009f;
        --text-color-light: #ffffffc2;

        --primary-font: system-ui;
        --secondary-font: sans-serif;
    }

    .themeSetter.themeSetter-dark {
        --primary-color: #86efac;
    --secondary-color: #c04eed;
    --accent-color: #8b5cf6;
    --nuetral-color: #374151;
    --base-color: #111827;
    --info-color: #7BE0F4;
    --success-color: #18D898;
    --warning-color: #eab308;
    --error-color: #b91c1c;
    --text-color: #0000009f;
    --text-color-light: #ffffffc2;
    --primary-font: system-ui;
    --secondary-font: sans-serif;
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