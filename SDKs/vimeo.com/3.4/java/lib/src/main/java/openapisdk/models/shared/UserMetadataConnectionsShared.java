package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class UserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}