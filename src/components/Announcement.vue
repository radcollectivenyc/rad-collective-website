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
	animation: movingBorder 8s linear infinite;
}

@keyframes movingBorder {
  0%   {background-position: 0px 0px, 200px 100%, 0px 200px, 100% 0px;}
  50%  {background-position: 200px 0px, 0px 100%, 0px 0px, 100% 200px;}
  100% {background-position: 0px 0px, 200px 100%, 0px 200px, 100% 0px;}
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
	width: fit-content;
	height: 36px;
	font-size: 16px;
  font-weight: bold;
	text-align: center;
	color: black;
	background: var(--color-orange-light);
	padding: 4px 16px;
	border-bottom: 2px solid rgba(0,0,0,0.1);
	border-radius: 18px;
	margin-top: 8px;
	&:hover {
		filter: brightness(0.95)
	}
}
</style>
