package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateMultiNodeInventoryRequestBody {
    @JsonProperty("inventories")
    public UpdateMultiNodeInventoryRequestBodyInventories inventories;
    public UpdateMultiNodeInventoryRequestBody withInventories(UpdateMultiNodeInventoryRequestBodyInventories inventories) {
        this.inventories = inventories;
        return this;
    }
}