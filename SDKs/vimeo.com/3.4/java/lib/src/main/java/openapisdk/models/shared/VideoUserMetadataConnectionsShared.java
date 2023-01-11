package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class VideoUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}