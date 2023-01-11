package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateMultiNodeInventoryRequestBodyInventories {
    @JsonProperty("nodes")
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodes[] nodes;
    public UpdateMultiNodeInventoryRequestBodyInventories withNodes(UpdateMultiNodeInventoryRequestBodyInventoriesNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
}