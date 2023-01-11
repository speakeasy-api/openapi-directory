package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty {
    @JsonProperty("amount")
    public Double amount;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum unit;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty withUnit(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}