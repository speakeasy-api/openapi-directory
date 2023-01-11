package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty {
    @JsonProperty("amount")
    public Double amount;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum unit;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty withUnit(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}