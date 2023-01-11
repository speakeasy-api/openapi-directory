package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnectionsMetadataConnectionsPictures
 * Information about the pictures associated with this page.
**/
public class OnDemandPageMetadataConnectionsMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageMetadataConnectionsMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageMetadataConnectionsMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageMetadataConnectionsMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}