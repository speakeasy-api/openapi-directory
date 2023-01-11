package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class PresetsUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}