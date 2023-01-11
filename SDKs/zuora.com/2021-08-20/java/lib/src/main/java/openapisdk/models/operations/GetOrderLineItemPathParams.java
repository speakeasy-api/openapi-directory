package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderLineItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public GetOrderLineItemPathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}