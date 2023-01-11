package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadataConnections
 * A collection of information that is connected to this resource, including videos, genres, and pictures connections.
**/
public class OnDemandPageMetadataConnections {
    @JsonProperty("metadata")
    public OnDemandPageMetadataConnectionsMetadata metadata;
    public OnDemandPageMetadataConnections withMetadata(OnDemandPageMetadataConnectionsMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}