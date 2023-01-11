package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateMultiNodeInventoryRequestBodyInventoriesNodes {
    @JsonProperty("inputQty")
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty inputQty;
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodes withInputQty(UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty inputQty) {
        this.inputQty = inputQty;
        return this;
    }
    @JsonProperty("shipNode")
    public String shipNode;
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodes withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
}