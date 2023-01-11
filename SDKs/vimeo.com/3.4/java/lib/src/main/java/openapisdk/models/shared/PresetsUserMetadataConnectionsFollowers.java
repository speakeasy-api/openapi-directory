package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsFollowers
 * Information about the user's followers.
**/
public class PresetsUserMetadataConnectionsFollowers {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsFollowers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsFollowers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsFollowers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}