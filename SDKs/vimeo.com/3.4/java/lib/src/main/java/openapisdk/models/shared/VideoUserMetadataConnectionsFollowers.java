package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class VideoUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}