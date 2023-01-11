package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupMetadataConnectionsUsers
 * Information about the members or moderators of this group.
**/
public class GroupMetadataConnectionsUsers {
    @JsonProperty("options")
    public String[] options;
    public GroupMetadataConnectionsUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupMetadataConnectionsUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupMetadataConnectionsUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}