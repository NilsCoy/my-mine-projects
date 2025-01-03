function placeholderCheck() {
	var x = '%servervariables_value_anvil_x%'
	var y = '%servervariables_value_anvil_y%' - 1
	var z = '%servervariables_value_anvil_z%'
    return BukkitServer.getWorld('Epica').getBlockAt(x,y,z).getType();
}

placeholderCheck();