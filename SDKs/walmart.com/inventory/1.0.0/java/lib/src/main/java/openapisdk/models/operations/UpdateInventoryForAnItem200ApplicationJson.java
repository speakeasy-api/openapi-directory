package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateInventoryForAnItem200ApplicationJson {
    @JsonProperty("quantity")
    public UpdateInventoryForAnItem200ApplicationJsonQuantity quantity;
    public UpdateInventoryForAnItem200ApplicationJson withQuantity(UpdateInventoryForAnItem200ApplicationJsonQuantity quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonProperty("sku")
    public String sku;
    public UpdateInventoryForAnItem200ApplicationJson withSku(String sku) {
        this.sku = sku;
        return this;
    }
}