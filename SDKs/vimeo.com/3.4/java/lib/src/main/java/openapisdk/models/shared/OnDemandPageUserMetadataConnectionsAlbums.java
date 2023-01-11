package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class OnDemandPageUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}