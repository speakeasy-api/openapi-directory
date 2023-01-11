package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateInventoryForAnItem200ApplicationJsonQuantity {
    @JsonProperty("amount")
    public Double amount;
    public UpdateInventoryForAnItem200ApplicationJsonQuantity withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum unit;
    public UpdateInventoryForAnItem200ApplicationJsonQuantity withUnit(UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}