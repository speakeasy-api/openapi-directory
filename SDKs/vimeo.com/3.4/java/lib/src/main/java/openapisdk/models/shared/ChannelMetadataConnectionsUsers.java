package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataConnectionsUsers
 * Information about the users following or moderating this channel.
**/
public class ChannelMetadataConnectionsUsers {
    @JsonProperty("options")
    public String[] options;
    public ChannelMetadataConnectionsUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public ChannelMetadataConnectionsUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataConnectionsUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}