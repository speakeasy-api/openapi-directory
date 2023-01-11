package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWfsInventoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromModifiedDate")
    public String fromModifiedDate;
    public GetWfsInventoryQueryParams withFromModifiedDate(String fromModifiedDate) {
        this.fromModifiedDate = fromModifiedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetWfsInventoryQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetWfsInventoryQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sku")
    public String sku;
    public GetWfsInventoryQueryParams withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toModifiedDate")
    public String toModifiedDate;
    public GetWfsInventoryQueryParams withToModifiedDate(String toModifiedDate) {
        this.toModifiedDate = toModifiedDate;
        return this;
    }
}