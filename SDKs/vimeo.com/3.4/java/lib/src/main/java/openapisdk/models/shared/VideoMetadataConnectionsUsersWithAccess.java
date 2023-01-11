package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsUsersWithAccess
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
public class VideoMetadataConnectionsUsersWithAccess {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsUsersWithAccess withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoMetadataConnectionsUsersWithAccess withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsUsersWithAccess withUri(String uri) {
        this.uri = uri;
        return this;
    }
}