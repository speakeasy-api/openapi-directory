package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInventory200ApplicationJson {
    @JsonProperty("quantity")
    public GetInventory200ApplicationJsonQuantity quantity;
    public GetInventory200ApplicationJson withQuantity(GetInventory200ApplicationJsonQuantity quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonProperty("sku")
    public String sku;
    public GetInventory200ApplicationJson withSku(String sku) {
        this.sku = sku;
        return this;
    }
}