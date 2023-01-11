package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoMetadataConnectionsCredits
 * Information about the users credited in this video.
**/
public class OnDemandPageVideoMetadataConnectionsCredits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsCredits withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsCredits withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsCredits withUri(String uri) {
        this.uri = uri;
        return this;
    }
}