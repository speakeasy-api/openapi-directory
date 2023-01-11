package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectMetadata
 * The project's metadata.
**/
public class ProjectMetadata {
    @JsonProperty("connections")
    public ProjectMetadataConnections connections;
    public ProjectMetadata withConnections(ProjectMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}