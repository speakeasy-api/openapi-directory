package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsAlbums
 * Information about the albums created by this user.
**/
public class PresetsUserMetadataConnectionsAlbums {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsAlbums withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsAlbums withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsAlbums withUri(String uri) {
        this.uri = uri;
        return this;
    }
}