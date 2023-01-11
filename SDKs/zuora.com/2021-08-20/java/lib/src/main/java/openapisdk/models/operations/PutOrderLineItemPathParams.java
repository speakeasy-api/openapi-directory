package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrderLineItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public PutOrderLineItemPathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}