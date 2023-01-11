package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsChannels
 * Information about this user's subscribed channels.
**/
public class UserMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}