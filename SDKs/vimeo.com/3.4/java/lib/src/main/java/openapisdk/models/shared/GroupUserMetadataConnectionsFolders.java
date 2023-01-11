package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class GroupUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}