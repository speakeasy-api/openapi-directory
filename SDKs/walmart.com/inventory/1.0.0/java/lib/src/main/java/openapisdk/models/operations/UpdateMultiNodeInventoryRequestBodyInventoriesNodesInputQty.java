package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty {
    @JsonProperty("amount")
    public Double amount;
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum unit;
    public UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty withUnit(UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}