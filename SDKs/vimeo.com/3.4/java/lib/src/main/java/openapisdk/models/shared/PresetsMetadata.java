package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsMetadata
 * Metadata about the album.
**/
public class PresetsMetadata {
    @JsonProperty("connections")
    public PresetsMetadataConnections connections;
    public PresetsMetadata withConnections(PresetsMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}