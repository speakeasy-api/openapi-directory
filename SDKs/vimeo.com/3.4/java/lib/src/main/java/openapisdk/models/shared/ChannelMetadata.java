package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadata
 * Metadata about the channel.
**/
public class ChannelMetadata {
    @JsonProperty("connections")
    public ChannelMetadataConnections connections;
    public ChannelMetadata withConnections(ChannelMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public ChannelMetadataInteractions interactions;
    public ChannelMetadata withInteractions(ChannelMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}