<template>
    <section class="announcement">
		<h2>Soft Launch Picnic {{'<'}}3</h2>
		<p>Join us for our <b>Soft Launch Picnic</b> this weekend! Open to all, no technical background required. Bring a snack (optional) and let's hang!</p>
		<div class="event-detail">
			<img alt="calendar icon" :src="`/icons/calendar-days.svg`">
			<div>Saturday, July 11, 4:00 PM</div>
		</div>
		<div class="event-detail">
			<img alt="location dot icon" :src="`/icons/location-dot.svg`">
			<div>Tompkins Sqaure Park, NYC</div>
		</div>
		<a class="rsvp-button" target="_blank" href="https://luma.com/8mqj0joe">RSVP</a>
    </section>
</template>

<style scoped lang="scss">
.announcement {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 32px;

	/* animated border */
	background: 
	linear-gradient(90deg, var(--color-orange-light) 50%, transparent 50%),
	linear-gradient(90deg, var(--color-orange-light) 50%, transparent 50%),
	linear-gradient(0deg, var(--color-orange-light) 50%, transparent 50%),
	linear-gradient(0deg, var(--color-orange-light) 50%, transparent 50%);
	background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
	background-size: 16px 4px, 16px 4px, 4px 16px, 4px 16px;
	background-position: 0px 0px, 200px 100%, 0px 200px, 100% 0px;
	transition: background-position 2s;
}
.announcement:hover{
    background-position: 200px 0px, 0px 100%, 0px 0px, 100% 200px;
}
.event-detail {
	display: flex;
	gap: 8px;
	align-items: center;
}
.event-detail img {
	height: 18px;
	width: 18px;
}
.rsvp-button {
	height: 32px;
	width: fit-content;
	font-size: 18px;
	text-align: center;
	font-weight: bold;
	color: black;
	background: var(--color-orange-light);
	padding: 4px 8px;

	margin-top: 8px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	margin-bottom: 1px;
	&:hover {
	filter: brightness(0.95)
	}
}
</style>
