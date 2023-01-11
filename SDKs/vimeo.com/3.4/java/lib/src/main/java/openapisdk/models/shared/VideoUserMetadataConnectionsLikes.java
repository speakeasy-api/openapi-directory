package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class VideoUserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}