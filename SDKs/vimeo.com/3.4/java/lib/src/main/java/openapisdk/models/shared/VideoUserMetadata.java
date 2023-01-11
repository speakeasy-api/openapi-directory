package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadata
 * The user's metadata.
**/
public class VideoUserMetadata {
    @JsonProperty("connections")
    public VideoUserMetadataConnections connections;
    public VideoUserMetadata withConnections(VideoUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public VideoUserMetadataInteractions interactions;
    public VideoUserMetadata withInteractions(VideoUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}