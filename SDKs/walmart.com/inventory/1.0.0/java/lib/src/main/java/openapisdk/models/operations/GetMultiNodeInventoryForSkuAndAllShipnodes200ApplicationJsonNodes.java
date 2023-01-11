package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availToSellQty")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty availToSellQty;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes withAvailToSellQty(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty availToSellQty) {
        this.availToSellQty = availToSellQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors[] errors;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes withErrors(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputQty")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty inputQty;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes withInputQty(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty inputQty) {
        this.inputQty = inputQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipNode")
    public String shipNode;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
}