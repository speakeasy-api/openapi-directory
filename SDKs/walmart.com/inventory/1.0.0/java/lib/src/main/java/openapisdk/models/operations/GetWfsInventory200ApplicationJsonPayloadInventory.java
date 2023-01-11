package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWfsInventory200ApplicationJsonPayloadInventory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipNodes")
    public GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes[] shipNodes;
    public GetWfsInventory200ApplicationJsonPayloadInventory withShipNodes(GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes[] shipNodes) {
        this.shipNodes = shipNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GetWfsInventory200ApplicationJsonPayloadInventory withSku(String sku) {
        this.sku = sku;
        return this;
    }
}