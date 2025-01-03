var placeholder = "%plasmovoice_installed%";
var voice = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, placeholder);

var checkVoice = function (voice) {
  return voice === "true" ? "&f船" : "&f述";
};

checkVoice(voice);