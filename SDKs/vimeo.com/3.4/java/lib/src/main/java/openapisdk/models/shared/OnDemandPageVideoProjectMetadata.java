package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoProjectMetadata
 * The project's metadata.
**/
public class OnDemandPageVideoProjectMetadata {
    @JsonProperty("connections")
    public OnDemandPageVideoProjectMetadataConnections connections;
    public OnDemandPageVideoProjectMetadata withConnections(OnDemandPageVideoProjectMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}