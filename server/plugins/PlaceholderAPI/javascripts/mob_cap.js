var max_mobs = Number('%servervariables_globalvalue_mob_cap%');
var mobs = Number('%servervariables_globalvalue_mob_active%');

function placeholderCheck() {
	if(mobs >= max_mobs) {
		return 'false'
    }
	return 'true'
};

placeholderCheck()