package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes[] nodes;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories withNodes(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories withSku(String sku) {
        this.sku = sku;
        return this;
    }
}