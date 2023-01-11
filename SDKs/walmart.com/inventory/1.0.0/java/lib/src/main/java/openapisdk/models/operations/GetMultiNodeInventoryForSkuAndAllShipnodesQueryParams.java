package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shipNode")
    public String shipNode;
    public GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
}