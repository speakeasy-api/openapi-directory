package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PresetsSettingsButtons {
    @JsonProperty("embed")
    public Boolean embed;
    public PresetsSettingsButtons withEmbed(Boolean embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("hd")
    public Boolean hd;
    public PresetsSettingsButtons withHd(Boolean hd) {
        this.hd = hd;
        return this;
    }
    @JsonProperty("like")
    public Boolean like;
    public PresetsSettingsButtons withLike(Boolean like) {
        this.like = like;
        return this;
    }
    @JsonProperty("share")
    public Boolean share;
    public PresetsSettingsButtons withShare(Boolean share) {
        this.share = share;
        return this;
    }
    @JsonProperty("vote")
    public Boolean vote;
    public PresetsSettingsButtons withVote(Boolean vote) {
        this.vote = vote;
        return this;
    }
    @JsonProperty("watchlater")
    public Boolean watchlater;
    public PresetsSettingsButtons withWatchlater(Boolean watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}