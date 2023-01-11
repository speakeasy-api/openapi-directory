package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadata
 * The user's metadata.
**/
public class PresetsUserMetadata {
    @JsonProperty("connections")
    public PresetsUserMetadataConnections connections;
    public PresetsUserMetadata withConnections(PresetsUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public PresetsUserMetadataInteractions interactions;
    public PresetsUserMetadata withInteractions(PresetsUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}