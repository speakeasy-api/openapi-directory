package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoProjectMetadata
 * The project's metadata.
**/
public class VideoProjectMetadata {
    @JsonProperty("connections")
    public VideoProjectMetadataConnections connections;
    public VideoProjectMetadata withConnections(VideoProjectMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}