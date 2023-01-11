package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPromotionMetadata
 * The video's metadata.
**/
public class OnDemandPromotionMetadata {
    @JsonProperty("connections")
    public OnDemandPromotionMetadataConnections connections;
    public OnDemandPromotionMetadata withConnections(OnDemandPromotionMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}