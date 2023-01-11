package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sku")
    public String sku;
    public GetMultiNodeInventoryForSkuAndAllShipnodesPathParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}