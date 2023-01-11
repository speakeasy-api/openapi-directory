package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMultiNodeInventoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public UpdateMultiNodeInventoryPathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}