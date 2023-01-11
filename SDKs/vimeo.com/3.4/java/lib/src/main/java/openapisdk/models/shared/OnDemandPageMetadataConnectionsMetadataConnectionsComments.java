package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnectionsMetadataConnectionsComments
 * Information about the comments associated with this page.
**/
public class OnDemandPageMetadataConnectionsMetadataConnectionsComments {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageMetadataConnectionsMetadataConnectionsComments withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageMetadataConnectionsMetadataConnectionsComments withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageMetadataConnectionsMetadataConnectionsComments withUri(String uri) {
        this.uri = uri;
        return this;
    }
}