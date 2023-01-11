package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class UserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}