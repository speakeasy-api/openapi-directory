package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCatalogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=product-id")
    public String productId;
    public PostCatalogPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}