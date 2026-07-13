<template>
	<section v-if="isEventUpcoming" class="announcement">
		<h2>HTML Day 2026</h2>
		<p>Join us at the waterfront and write some HTML!</p>
		<div>
			<div class="event-detail"><img class="icon" alt="calendar icon" :src="`/icons/calendar-days.svg`">Friday, Aug 7, 6-8 PM</div>
			<div class="event-detail"><img class="icon" alt="location dot icon" :src="`/icons/location-dot.svg`">Pier A Park, Hoboken</div>
		</div>
		<a class="announcement-button" href="https://radnyc.net/htmlDay2026">Learn more</a>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const eventEnd = new Date('2026-08-07T20:00:00-04:00');
// const eventEnd = new Date('2026-07-11T18:00:00-04:00');
const isEventUpcoming = new Date() < eventEnd; 

</script>

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
.announcement-button {
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
