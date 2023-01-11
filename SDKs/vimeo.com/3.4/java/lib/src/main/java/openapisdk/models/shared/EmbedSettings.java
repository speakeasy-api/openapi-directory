package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmbedSettings {
    @JsonProperty("buttons")
    public EmbedSettingsButtons buttons;
    public EmbedSettings withButtons(EmbedSettingsButtons buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonProperty("color")
    public String color;
    public EmbedSettings withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("logos")
    public EmbedSettingsLogos logos;
    public EmbedSettings withLogos(EmbedSettingsLogos logos) {
        this.logos = logos;
        return this;
    }
    @JsonProperty("playbar")
    public Boolean playbar;
    public EmbedSettings withPlaybar(Boolean playbar) {
        this.playbar = playbar;
        return this;
    }
    @JsonProperty("speed")
    public Boolean speed;
    public EmbedSettings withSpeed(Boolean speed) {
        this.speed = speed;
        return this;
    }
    @JsonProperty("title")
    public EmbedSettingsTitle title;
    public EmbedSettings withTitle(EmbedSettingsTitle title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public EmbedSettings withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("volume")
    public Boolean volume;
    public EmbedSettings withVolume(Boolean volume) {
        this.volume = volume;
        return this;
    }
}