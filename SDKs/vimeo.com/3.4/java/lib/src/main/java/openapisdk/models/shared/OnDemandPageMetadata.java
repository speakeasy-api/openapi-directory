package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageMetadata
 * Metadata about the On Demand page.
**/
public class OnDemandPageMetadata {
    @JsonProperty("connections")
    public OnDemandPageMetadataConnections connections;
    public OnDemandPageMetadata withConnections(OnDemandPageMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public PurchaseInteraction interactions;
    public OnDemandPageMetadata withInteractions(PurchaseInteraction interactions) {
        this.interactions = interactions;
        return this;
    }
}