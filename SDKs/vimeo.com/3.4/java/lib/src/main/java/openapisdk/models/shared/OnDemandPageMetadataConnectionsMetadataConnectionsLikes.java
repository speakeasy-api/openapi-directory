package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnectionsMetadataConnectionsLikes
 * Information about the likes associated with this page.
**/
public class OnDemandPageMetadataConnectionsMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageMetadataConnectionsMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageMetadataConnectionsMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageMetadataConnectionsMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}