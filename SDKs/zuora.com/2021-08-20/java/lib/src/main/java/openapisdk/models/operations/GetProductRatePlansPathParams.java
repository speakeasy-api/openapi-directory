package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductRatePlansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=product_id")
    public String productId;
    public GetProductRatePlansPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}