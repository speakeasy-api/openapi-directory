package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class UserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}