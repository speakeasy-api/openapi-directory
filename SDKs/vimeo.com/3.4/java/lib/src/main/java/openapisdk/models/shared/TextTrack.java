package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TextTrack {
    @JsonProperty("active")
    public Boolean active;
    public TextTrack withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("hls_link")
    public String hlsLink;
    public TextTrack withHlsLink(String hlsLink) {
        this.hlsLink = hlsLink;
        return this;
    }
    @JsonProperty("hls_link_expires_time")
    public String hlsLinkExpiresTime;
    public TextTrack withHlsLinkExpiresTime(String hlsLinkExpiresTime) {
        this.hlsLinkExpiresTime = hlsLinkExpiresTime;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public TextTrack withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public TextTrack withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("link_expires_time")
    public String linkExpiresTime;
    public TextTrack withLinkExpiresTime(String linkExpiresTime) {
        this.linkExpiresTime = linkExpiresTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TextTrack withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public TextTrackTypeEnum type;
    public TextTrack withType(TextTrackTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public TextTrack withUri(String uri) {
        this.uri = uri;
        return this;
    }
}