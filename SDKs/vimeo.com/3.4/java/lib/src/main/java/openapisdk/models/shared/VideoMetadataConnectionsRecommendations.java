package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadataConnectionsRecommendations
 * The recommendations for this video.
**/
public class VideoMetadataConnectionsRecommendations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsRecommendations withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsRecommendations withUri(String uri) {
        this.uri = uri;
        return this;
    }
}