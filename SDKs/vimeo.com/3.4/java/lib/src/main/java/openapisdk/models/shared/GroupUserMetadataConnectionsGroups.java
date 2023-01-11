package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class GroupUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}