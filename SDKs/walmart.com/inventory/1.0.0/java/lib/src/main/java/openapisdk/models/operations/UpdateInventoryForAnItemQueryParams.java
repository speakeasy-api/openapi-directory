package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInventoryForAnItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shipNode")
    public String shipNode;
    public UpdateInventoryForAnItemQueryParams withShipNode(String shipNode) {
        this.shipNode = shipNode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sku")
    public String sku;
    public UpdateInventoryForAnItemQueryParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
}