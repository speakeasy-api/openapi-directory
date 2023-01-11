package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class VideoVersionsUserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}