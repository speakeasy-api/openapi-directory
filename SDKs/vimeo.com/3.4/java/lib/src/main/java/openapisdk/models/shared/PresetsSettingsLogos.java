package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PresetsSettingsLogos {
    @JsonProperty("custom")
    public Boolean custom;
    public PresetsSettingsLogos withCustom(Boolean custom) {
        this.custom = custom;
        return this;
    }
    @JsonProperty("sticky_custom")
    public Boolean stickyCustom;
    public PresetsSettingsLogos withStickyCustom(Boolean stickyCustom) {
        this.stickyCustom = stickyCustom;
        return this;
    }
    @JsonProperty("vimeo")
    public Boolean vimeo;
    public PresetsSettingsLogos withVimeo(Boolean vimeo) {
        this.vimeo = vimeo;
        return this;
    }
}