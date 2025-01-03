var finish = '%servervariables_value_fishing_max_progress%';
var point = '%servervariables_value_fishing_progress%';

function placeholderCheck() {
	if(point == '0') {
		return '&8&n   &8&n   &8&n   '
    };
	if(point == '1') {
		return '&7&n   &8&n   &8&n   '
    };
	if(point == '2') {
		return '&7&n   &7&n   &8&n   '
    };
	if(point == '3') {
		return '&7&n   &7&n   &7&n   '
    }
};

placeholderCheck()