<script lang="ts">
	import Button from "$lib/Button.svelte";
	import Chip from "$lib/Chip.svelte";
	import Input from "$lib/Input.svelte";
	import Notification from "$lib/Notification.svelte";

	let buttonWidth = 160;
	let buttonHeight = 50;
</script>

<svelte:head>
    <title>SemantiSvelte</title>
</svelte:head>

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
	<div class="buttons">
		<Input title="Nice Button" placeholder="Default" />
		<Input title="Nice Button" role="primary" placeholder="Primary" />
		<Input title="Nice Button 2" role="secondary" placeholder="Secondary" />
		<Input title="Nice Button 3" role="accent" placeholder="Accent" />
	</div>
	<div class="buttons">
		<Input title="Nice Button" role="info" placeholder="Info" />
		<Input title="Nice Button" role="success" placeholder="Success" />
		<Input title="Nice Button 2" role="warning" placeholder="Warning" />
		<Input title="Nice Button 3" role="error" placeholder="Error" />
	</div>
	<div class="notifications">
		<Notification>Some missing homework assignments.</Notification>
		<Notification role="info">Downloading file.</Notification>
		<Notification role="success">Download succeeded.</Notification>
		<Notification role="warning">Unkown file type bieng downloaded.</Notification>
		<Notification role="error">Downloaded file is dangerous.</Notification>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: calc(100% - 70px);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
		flex-direction: column;
	}
	.buttons,
	.notifications {
		display: flex;
		gap: 20px;
	}

	.notifications {
		width: 100%;
		flex-direction: column;
	}
</style>