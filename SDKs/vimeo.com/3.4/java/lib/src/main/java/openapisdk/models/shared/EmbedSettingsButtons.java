package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmbedSettingsButtons
 * A collection of information about the buttons that appear on the interface of the embeddable player.
**/
public class EmbedSettingsButtons {
    @JsonProperty("embed")
    public Boolean embed;
    public EmbedSettingsButtons withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("fullscreen")
    public Boolean fullscreen;
    public EmbedSettingsButtons withFullscreen(Boolean fullscreen) {
        this.fullscreen = fullscreen;
        return this;
    }
    @JsonProperty("hd")
    public Boolean hd;
    public EmbedSettingsButtons withHd(Boolean hd) {
        this.hd = hd;
        return this;
    }
    @JsonProperty("like")
    public Boolean like;
    public EmbedSettingsButtons withLike(Boolean like) {
        this.like = like;
        return this;
    }
    @JsonProperty("scaling")
    public Boolean scaling;
    public EmbedSettingsButtons withScaling(Boolean scaling) {
        this.scaling = scaling;
        return this;
    }
    @JsonProperty("share")
    public Boolean share;
    public EmbedSettingsButtons withShare(Boolean share) {
        this.share = share;
        return this;
    }
    @JsonProperty("watchlater")
    public Boolean watchlater;
    public EmbedSettingsButtons withWatchlater(Boolean watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}