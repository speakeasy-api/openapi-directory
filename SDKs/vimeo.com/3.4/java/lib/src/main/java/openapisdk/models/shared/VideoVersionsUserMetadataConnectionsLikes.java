package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class VideoVersionsUserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}