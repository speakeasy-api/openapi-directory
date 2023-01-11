package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadata
 * The video's metadata.
**/
public class VideoMetadata {
    @JsonProperty("connections")
    public VideoMetadataConnections connections;
    public VideoMetadata withConnections(VideoMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public VideoMetadataInteractions interactions;
    public VideoMetadata withInteractions(VideoMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}