<script lang="ts">
	import Button from "$lib/Button.svelte";
	import Chip from "$lib/Chip.svelte";

	let buttonWidth = 160;
	let buttonHeight = 50;
</script>

<section>
	<div class="buttons">
		<Button title="Nice Button" height="{buttonHeight}px" width="{buttonWidth}px">Default</Button>
		<Button title="Nice Button" role="primary" height="{buttonHeight}px" width="{buttonWidth}px">Primary</Button>
		<Button title="Nice Button 2" role="secondary" height="{buttonHeight}px" width="{buttonWidth}px">Secondary</Button>
		<Button title="Nice Button 3" role="accent" height="{buttonHeight}px" width="{buttonWidth}px">Accent</Button>
	</div>
	<div class="buttons">
		<Button title="Nice Button" role="info" height="{buttonHeight}px" width="{buttonWidth}px">Find out more</Button>
		<Button title="Nice Button" role="success" height="{buttonHeight}px" width="{buttonWidth}px">Proceed</Button>
		<Button title="Nice Button 2" role="warning" height="{buttonHeight}px" width="{buttonWidth}px">Check it out</Button>
		<Button title="Nice Button 3" role="error" height="{buttonHeight}px" width="{buttonWidth}px">Delete something</Button>
	</div>
	<div class="buttons">
		<Chip title="Nice Button">Default</Chip>
		<Chip title="Nice Button" role="primary">Primary</Chip>
		<Chip title="Nice Button 2" role="secondary">Secondary</Chip>
		<Chip title="Nice Button 3" role="accent">Accent</Chip>
	</div>
	<div class="buttons">
		<Chip title="Nice Button" role="info">Find out more</Chip>
		<Chip title="Nice Button" role="success">Proceed</Chip>
		<Chip title="Nice Button 2" role="warning">Check it out</Chip>
		<Chip title="Nice Button 3" role="error">Delete something</Chip>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
		flex-direction: column;
	}
	.buttons {
		display: flex;
		gap: 20px;
	}
</style>