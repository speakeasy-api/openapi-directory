package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsMetadata
 * The video version's metadata.
**/
public class VideoVersionsMetadata {
    @JsonProperty("connections")
    public VideoVersionsMetadataConnections connections;
    public VideoVersionsMetadata withConnections(VideoVersionsMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}