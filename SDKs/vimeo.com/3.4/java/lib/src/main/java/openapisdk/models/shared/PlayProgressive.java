package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayProgressive {
    @JsonProperty("created_time")
    public String createdTime;
    public PlayProgressive withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("fps")
    public Double fps;
    public PlayProgressive withFps(Double fps) {
        this.fps = fps;
        return this;
    }
    @JsonProperty("height")
    public Double height;
    public PlayProgressive withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public PlayProgressive withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("link_expiration_time")
    public String linkExpirationTime;
    public PlayProgressive withLinkExpirationTime(String linkExpirationTime) {
        this.linkExpirationTime = linkExpirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log")
    public java.util.Map<String, Object> log;
    public PlayProgressive withLog(java.util.Map<String, Object> log) {
        this.log = log;
        return this;
    }
    @JsonProperty("md5")
    public String md5;
    public PlayProgressive withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
    @JsonProperty("size")
    public Double size;
    public PlayProgressive withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public PlayProgressiveTypeEnum type;
    public PlayProgressive withType(PlayProgressiveTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("width")
    public Double width;
    public PlayProgressive withWidth(Double width) {
        this.width = width;
        return this;
    }
}