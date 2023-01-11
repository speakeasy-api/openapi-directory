package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsModeratedChannels
 * Information about the channels that this user moderates.
**/
public class PresetsUserMetadataConnectionsModeratedChannels {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsModeratedChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsModeratedChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsModeratedChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}