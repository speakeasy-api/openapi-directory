package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class GroupUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}