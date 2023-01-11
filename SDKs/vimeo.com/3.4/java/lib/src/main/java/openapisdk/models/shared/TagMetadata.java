package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagMetadata
 * Metadata about the group.
**/
public class TagMetadata {
    @JsonProperty("connections")
    public TagMetadataConnections connections;
    public TagMetadata withConnections(TagMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}