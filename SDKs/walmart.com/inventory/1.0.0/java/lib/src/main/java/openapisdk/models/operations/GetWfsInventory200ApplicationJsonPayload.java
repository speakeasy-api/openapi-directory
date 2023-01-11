package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWfsInventory200ApplicationJsonPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory")
    public GetWfsInventory200ApplicationJsonPayloadInventory[] inventory;
    public GetWfsInventory200ApplicationJsonPayload withInventory(GetWfsInventory200ApplicationJsonPayloadInventory[] inventory) {
        this.inventory = inventory;
        return this;
    }
}