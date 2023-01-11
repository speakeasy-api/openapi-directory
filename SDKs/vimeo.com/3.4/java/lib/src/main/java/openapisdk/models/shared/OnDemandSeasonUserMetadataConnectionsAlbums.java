package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class OnDemandSeasonUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}