var point = '%servervariables_value_cooking_point%';
var placeholder = '';

function placeholderCheck() {
    for(var i = 1; i < 11; i++) {
		if(i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == point) {
			if((i == 5 || i == 6) && i != point) {
				placeholder = placeholder + '&e&n ';
			};
			if((i == 2 || i == 3 || i == 4 || i == 7 || i == 8 || i == 9) && i != point) {
				placeholder = placeholder + '&c&n ';
			};
			if(i == point) {
				placeholder = placeholder + '&6&n ';
			}
		}
		else{
			placeholder = placeholder + '&f&n ';
		}
    };
	return placeholder
};

placeholderCheck()