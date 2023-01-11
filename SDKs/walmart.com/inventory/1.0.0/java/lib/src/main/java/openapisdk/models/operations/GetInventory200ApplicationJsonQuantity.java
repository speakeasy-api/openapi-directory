package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInventory200ApplicationJsonQuantity {
    @JsonProperty("amount")
    public Double amount;
    public GetInventory200ApplicationJsonQuantity withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public GetInventory200ApplicationJsonQuantityUnitEnum unit;
    public GetInventory200ApplicationJsonQuantity withUnit(GetInventory200ApplicationJsonQuantityUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}