package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadata
 * Metadata about the category.
**/
public class CategoryMetadata {
    @JsonProperty("connections")
    public CategoryMetadataConnections connections;
    public CategoryMetadata withConnections(CategoryMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public CategoryMetadataInteractions interactions;
    public CategoryMetadata withInteractions(CategoryMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}