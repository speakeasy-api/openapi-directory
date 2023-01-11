package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes[] nodes;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson withNodes(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson withSku(String sku) {
        this.sku = sku;
        return this;
    }
}