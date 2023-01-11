package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsComments
 * Information about the comments on this video.
**/
public class OnDemandPageVideoMetadataConnectionsComments {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsComments withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsComments withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsComments withUri(String uri) {
        this.uri = uri;
        return this;
    }
}