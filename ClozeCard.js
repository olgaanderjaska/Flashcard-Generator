module.exports = ClozeCard;

function clozeCard(back, front) {
	this.cloze = cloze;
	this.fulltext = full;
	this.partial = getPartial();

	function getPartial() {
		return text.replace(cloze, "...");
	}

	if (!text.includes(cloze)) {
		console.log("Error: '" + cloze + "'' doesn't appear in '" + text +"'.");
	}
}


