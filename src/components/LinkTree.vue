<template>
	<div class="linktree">
		<a v-for="(link,i) in links" :key="`linktreeLink${i}`" class="linktree-link" :href="link.url" target="_blank" rel="noopener noreferrer">
			<img :src="`/icons/${link.svg}.svg`">
			{{ link.text }}
		</a>
	</div>
</template>

<script setup>
const links = [
	{ text: 'RSVP to our soft launch picnic!', url: 'https://luma.com/8mqj0joe', svg: 'calendar-days' }
]
</script>

<style scoped lang="scss">
.linktree {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.linktree-link {
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: bold;
	padding: 4px 8px;
	margin: 0 auto 0 0;
	img {
		width: 24px;
		height: 24px;
	}
}
</style>
