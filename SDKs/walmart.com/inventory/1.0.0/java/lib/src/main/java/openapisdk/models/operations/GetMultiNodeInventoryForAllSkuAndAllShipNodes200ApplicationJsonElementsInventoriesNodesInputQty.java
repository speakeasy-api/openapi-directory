package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty {
    @JsonProperty("amount")
    public Double amount;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum unit;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty withUnit(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}