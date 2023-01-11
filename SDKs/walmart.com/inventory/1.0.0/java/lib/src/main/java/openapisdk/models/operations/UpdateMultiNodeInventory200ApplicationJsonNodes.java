package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMultiNodeInventory200ApplicationJsonNodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors[] errors;
    public UpdateMultiNodeInventory200ApplicationJsonNodes withErrors(UpdateMultiNodeInventory200ApplicationJsonNodesErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipNode")
    public String shipNode;
    public UpdateMultiNodeInventory200ApplicationJsonNodes withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public UpdateMultiNodeInventory200ApplicationJsonNodes withStatus(String status) {
        this.status = status;
        return this;
    }
}