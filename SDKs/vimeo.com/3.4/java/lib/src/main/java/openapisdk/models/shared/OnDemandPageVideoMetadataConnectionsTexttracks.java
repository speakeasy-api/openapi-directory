package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsTexttracks
 * Information about this video's text tracks.
**/
public class OnDemandPageVideoMetadataConnectionsTexttracks {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsTexttracks withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsTexttracks withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsTexttracks withUri(String uri) {
        this.uri = uri;
        return this;
    }
}