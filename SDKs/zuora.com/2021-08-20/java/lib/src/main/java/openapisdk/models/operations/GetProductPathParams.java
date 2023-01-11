package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=product-id")
    public String productId;
    public GetProductPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}