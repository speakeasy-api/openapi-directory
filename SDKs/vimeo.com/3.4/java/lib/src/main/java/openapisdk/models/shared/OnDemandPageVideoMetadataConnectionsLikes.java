package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsLikes
 * Information about the users who have liked this video.
**/
public class OnDemandPageVideoMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}