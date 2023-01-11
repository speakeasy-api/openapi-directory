package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsSettings
 * The contents of the presets group.
**/
public class PresetsSettings {
    @JsonProperty("buttons")
    public PresetsSettingsButtons buttons;
    public PresetsSettings withButtons(PresetsSettingsButtons buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonProperty("logos")
    public PresetsSettingsLogos logos;
    public PresetsSettings withLogos(PresetsSettingsLogos logos) {
        this.logos = logos;
        return this;
    }
    @JsonProperty("outro")
    public PresetsSettingsOutro outro;
    public PresetsSettings withOutro(PresetsSettingsOutro outro) {
        this.outro = outro;
        return this;
    }
}