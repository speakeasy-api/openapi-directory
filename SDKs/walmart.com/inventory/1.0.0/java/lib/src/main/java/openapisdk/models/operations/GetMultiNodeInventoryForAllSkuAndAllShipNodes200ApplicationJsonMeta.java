package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextCursor")
    public String nextCursor;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta withNextCursor(String nextCursor) {
        this.nextCursor = nextCursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Double totalCount;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}