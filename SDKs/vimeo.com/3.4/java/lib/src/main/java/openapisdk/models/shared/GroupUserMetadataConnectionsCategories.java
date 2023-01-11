package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class GroupUserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}