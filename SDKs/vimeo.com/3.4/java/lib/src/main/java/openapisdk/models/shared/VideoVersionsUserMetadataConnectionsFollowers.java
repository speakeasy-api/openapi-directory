package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class VideoVersionsUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}