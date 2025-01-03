var placeholder = '%servervariables_value_player_titul_active%'
function placeholderCheck() {
    if (placeholder == 0) {
        return ''
    }
    else {
		if (placeholder == 1) {
			return '&7[&5 Первопроходец &7] ' }
		if (placeholder == 2) {
			return '&7[&8 Охотник &7] ' }
		if (placeholder == 3) {
			return '&7[&2 Егерь &7] ' }
		if (placeholder == 4) {
			return '&7[&a Зверобой &7] ' }
		if (placeholder == 5) {
			return '&7[&8 Разбойник &7] ' }
		if (placeholder == 6) {
			return '&7[&c Убийца &7] ' }
		if (placeholder == 7) {
			return '&7[&4 Палач &7] ' }
		if (placeholder == 8) {
			return '&7[&4 Маньяк &7] ' }
		if (placeholder == 9) {
			return '&7[&2 Ненавистник флоры &7] ' }
		if (placeholder == 10) {
			return '&7[&d Эрхиус &7] ' }
		if (placeholder == 11) {
			return '&7[&8 Рыболюбец &7] ' }
		if (placeholder == 12) {
			return '&7[&3 Ловец &7] ' }
		if (placeholder == 13) {
			return '&7[&b Местный Нептун &7] ' }
		if (placeholder == 14) {
			return '&7[&8 Рудокоп &7] ' }
		if (placeholder == 15) {
			return '&7[&e Горняк &7] ' }
		if (placeholder == 16) {
			return '&7[&6 Старатель &7] ' }
		if (placeholder == 17) {
			return '&7[&6 II поколение &7] ' }
		if (placeholder == 18) {
			return '&7[&d Мастер &7] ' }
		if (placeholder == 19) {
			return '&7[&5 Грандмастер &7] ' }
    }
}

placeholderCheck()