var placeholder = "%plasmovoice_installed%";
var voice = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, placeholder);

var checkVoice = function (voice) {
  return voice === "true" ? " &a船&f | " : " &c述&f | ";
};

checkVoice(voice);