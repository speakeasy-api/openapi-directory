package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoMetadataConnectionsRelated
 * Related content for this video.
**/
public class OnDemandPageVideoMetadataConnectionsRelated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsRelated withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsRelated withUri(String uri) {
        this.uri = uri;
        return this;
    }
}