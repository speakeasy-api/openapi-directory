package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmbedSettingsLogos
 * A collection of information about the logo in the corner of the embeddable player.
**/
public class EmbedSettingsLogos {
    @JsonProperty("custom")
    public EmbedSettingsLogosCustom custom;
    public EmbedSettingsLogos withCustom(EmbedSettingsLogosCustom custom) {
        this.custom = custom;
        return this;
    }
    @JsonProperty("vimeo")
    public Boolean vimeo;
    public EmbedSettingsLogos withVimeo(Boolean vimeo) {
        this.vimeo = vimeo;
        return this;
    }
}