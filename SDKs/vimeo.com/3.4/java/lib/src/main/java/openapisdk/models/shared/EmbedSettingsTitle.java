package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmbedSettingsTitle
 * A collection of information relating to the embeddable player's title bar.
**/
public class EmbedSettingsTitle {
    @JsonProperty("name")
    public EmbedSettingsTitleNameEnum name;
    public EmbedSettingsTitle withName(EmbedSettingsTitleNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("owner")
    public EmbedSettingsTitleOwnerEnum owner;
    public EmbedSettingsTitle withOwner(EmbedSettingsTitleOwnerEnum owner) {
        this.owner = owner;
        return this;
    }
    @JsonProperty("portrait")
    public EmbedSettingsTitlePortraitEnum portrait;
    public EmbedSettingsTitle withPortrait(EmbedSettingsTitlePortraitEnum portrait) {
        this.portrait = portrait;
        return this;
    }
}