package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class VideoUserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}