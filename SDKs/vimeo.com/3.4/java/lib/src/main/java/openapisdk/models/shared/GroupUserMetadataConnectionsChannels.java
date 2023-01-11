package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class GroupUserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}