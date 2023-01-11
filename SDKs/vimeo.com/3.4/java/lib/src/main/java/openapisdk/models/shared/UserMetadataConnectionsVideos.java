package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsVideos
 * Information about the videos uploaded by this user.
**/
public class UserMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}