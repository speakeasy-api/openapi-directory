package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsBlock
 * Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.
**/
public class GroupUserMetadataConnectionsBlock {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsBlock withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}