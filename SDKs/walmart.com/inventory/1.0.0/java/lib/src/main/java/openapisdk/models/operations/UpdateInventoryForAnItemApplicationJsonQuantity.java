package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateInventoryForAnItemApplicationJsonQuantity {
    @JsonProperty("amount")
    public Double amount;
    public UpdateInventoryForAnItemApplicationJsonQuantity withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum unit;
    public UpdateInventoryForAnItemApplicationJsonQuantity withUnit(UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}