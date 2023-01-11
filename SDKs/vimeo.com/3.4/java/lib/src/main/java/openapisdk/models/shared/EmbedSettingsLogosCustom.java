package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmbedSettingsLogosCustom
 * A collection of information relating to custom logos in the embeddable player.
**/
public class EmbedSettingsLogosCustom {
    @JsonProperty("active")
    public Boolean active;
    public EmbedSettingsLogosCustom withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public EmbedSettingsLogosCustom withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("sticky")
    public Boolean sticky;
    public EmbedSettingsLogosCustom withSticky(Boolean sticky) {
        this.sticky = sticky;
        return this;
    }
}