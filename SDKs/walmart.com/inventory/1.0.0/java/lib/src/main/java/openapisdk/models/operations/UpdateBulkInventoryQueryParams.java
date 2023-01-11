package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBulkInventoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feedType")
    public String feedType;
    public UpdateBulkInventoryQueryParams withFeedType(String feedType) {
        this.feedType = feedType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shipNode")
    public String shipNode;
    public UpdateBulkInventoryQueryParams withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
}