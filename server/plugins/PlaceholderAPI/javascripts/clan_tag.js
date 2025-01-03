var placeholder = '%clans_clan_tag%'
function placeholderCheck() {
    if (placeholder == '') {
        return ''
    }
    else {
		return ' &7< %clans_colored_clan_tag% &7>'
    }
}

placeholderCheck()