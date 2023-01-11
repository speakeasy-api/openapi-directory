package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Credit {
    @JsonProperty("name")
    public String name;
    public Credit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public Credit withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Credit withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Credit withUser(User user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video")
    public Video video;
    public Credit withVideo(Video video) {
        this.video = video;
        return this;
    }
}