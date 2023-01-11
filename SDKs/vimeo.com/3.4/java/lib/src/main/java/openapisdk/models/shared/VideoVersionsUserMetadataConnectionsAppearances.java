package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class VideoVersionsUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}