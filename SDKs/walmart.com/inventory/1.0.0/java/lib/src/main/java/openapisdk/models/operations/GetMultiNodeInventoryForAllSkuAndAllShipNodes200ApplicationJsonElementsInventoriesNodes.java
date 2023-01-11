package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availToSellQty")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty availToSellQty;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes withAvailToSellQty(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty availToSellQty) {
        this.availToSellQty = availToSellQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputQty")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty inputQty;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes withInputQty(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty inputQty) {
        this.inputQty = inputQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipNode")
    public String shipNode;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
}