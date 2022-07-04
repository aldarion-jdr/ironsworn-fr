Hooks.once("init", () => {
	if(typeof Babele !== "undefined") {
		Babele.get().register({
			module: "ironsworn-fr",
			lang: "fr",
			dir: "compendium"
		});
	}
});
