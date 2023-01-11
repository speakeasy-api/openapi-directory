package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsShared
 * Information about the videos that have been shared with this user.
**/
public class PresetsUserMetadataConnectionsShared {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsShared withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsShared withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsShared withUri(String uri) {
        this.uri = uri;
        return this;
    }
}