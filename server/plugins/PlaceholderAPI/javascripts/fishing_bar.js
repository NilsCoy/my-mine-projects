var finish = '%servervariables_value_fishing_finish%';
var point = '%servervariables_value_fishing_point%';
var placeholder = '';

function placeholderCheck() {
    for(var i = 1; i < 11; i++) {
		if(i == finish || i == point) {
			if(i == finish && i != point) {
				placeholder = placeholder + '&9&n ';
			};
			if(i == point) {
				placeholder = placeholder + '&f&n ';
			}
		}
		else{
			placeholder = placeholder + '&1&n ';
		}
    };
	return placeholder
};

placeholderCheck()