package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPageMetadataConnectionsMetadata {
    @JsonProperty("connections")
    public OnDemandPageMetadataConnectionsMetadataConnections connections;
    public OnDemandPageMetadataConnectionsMetadata withConnections(OnDemandPageMetadataConnectionsMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}