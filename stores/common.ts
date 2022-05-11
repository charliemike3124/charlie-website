import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
	state: () => ({ test: 0 }),
	actions: {
		increment() {
			this.test++;
		},
	},
});
