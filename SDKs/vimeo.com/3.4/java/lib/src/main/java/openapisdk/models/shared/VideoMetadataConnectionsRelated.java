package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadataConnectionsRelated
 * Related content for this video.
**/
public class VideoMetadataConnectionsRelated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsRelated withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsRelated withUri(String uri) {
        this.uri = uri;
        return this;
    }
}