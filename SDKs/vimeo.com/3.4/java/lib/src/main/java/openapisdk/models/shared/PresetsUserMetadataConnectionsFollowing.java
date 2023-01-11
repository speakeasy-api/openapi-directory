package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsFollowing
 * Information about the users that the current user is following.
**/
public class PresetsUserMetadataConnectionsFollowing {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsFollowing withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsFollowing withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsFollowing withUri(String uri) {
        this.uri = uri;
        return this;
    }
}