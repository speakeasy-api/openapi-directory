package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class GroupUserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}