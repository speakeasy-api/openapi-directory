package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class UserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}