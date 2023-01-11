package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty {
    @JsonProperty("amount")
    public Double amount;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum unit;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty withUnit(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}