package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMultiNodeInventory200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public UpdateMultiNodeInventory200ApplicationJsonNodes[] nodes;
    public UpdateMultiNodeInventory200ApplicationJson withNodes(UpdateMultiNodeInventory200ApplicationJsonNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public UpdateMultiNodeInventory200ApplicationJson withSku(String sku) {
        this.sku = sku;
        return this;
    }
}