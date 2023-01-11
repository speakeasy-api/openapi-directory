package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextCursor")
    public String nextCursor;
    public GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams withNextCursor(String nextCursor) {
        this.nextCursor = nextCursor;
        return this;
    }
}