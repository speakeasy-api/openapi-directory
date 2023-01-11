package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadata
 * The user's metadata.
**/
public class VideoVersionsUserMetadata {
    @JsonProperty("connections")
    public VideoVersionsUserMetadataConnections connections;
    public VideoVersionsUserMetadata withConnections(VideoVersionsUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public VideoVersionsUserMetadataInteractions interactions;
    public VideoVersionsUserMetadata withInteractions(VideoVersionsUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}