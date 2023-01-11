package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class VideoVersionsUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}