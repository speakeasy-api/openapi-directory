package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements elements;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson withElements(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements elements) {
        this.elements = elements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta meta;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson withMeta(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}