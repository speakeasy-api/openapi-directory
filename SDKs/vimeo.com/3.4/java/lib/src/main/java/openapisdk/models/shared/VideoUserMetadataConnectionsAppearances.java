package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class VideoUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}