package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateInventoryForAnItemApplicationJson {
    @JsonProperty("quantity")
    public UpdateInventoryForAnItemApplicationJsonQuantity quantity;
    public UpdateInventoryForAnItemApplicationJson withQuantity(UpdateInventoryForAnItemApplicationJsonQuantity quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonProperty("sku")
    public String sku;
    public UpdateInventoryForAnItemApplicationJson withSku(String sku) {
        this.sku = sku;
        return this;
    }
}