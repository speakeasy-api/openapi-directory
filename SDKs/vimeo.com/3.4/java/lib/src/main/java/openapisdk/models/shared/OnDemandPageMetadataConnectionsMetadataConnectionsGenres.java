package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnectionsMetadataConnectionsGenres
 * Information about the genres associated with this page.
**/
public class OnDemandPageMetadataConnectionsMetadataConnectionsGenres {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageMetadataConnectionsMetadataConnectionsGenres withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageMetadataConnectionsMetadataConnectionsGenres withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageMetadataConnectionsMetadataConnectionsGenres withUri(String uri) {
        this.uri = uri;
        return this;
    }
}