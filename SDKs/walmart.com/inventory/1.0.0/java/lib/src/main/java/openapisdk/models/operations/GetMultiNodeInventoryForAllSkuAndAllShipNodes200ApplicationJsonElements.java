package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventories")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories[] inventories;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements withInventories(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories[] inventories) {
        this.inventories = inventories;
        return this;
    }
}