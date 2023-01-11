package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnectionsMetadataConnectionsSeasons
 * Information about the seasons associated with this page.
**/
public class OnDemandPageMetadataConnectionsMetadataConnectionsSeasons {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageMetadataConnectionsMetadataConnectionsSeasons withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageMetadataConnectionsMetadataConnectionsSeasons withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageMetadataConnectionsMetadataConnectionsSeasons withUri(String uri) {
        this.uri = uri;
        return this;
    }
}