package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetProductRatePlanChargeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetProductRatePlanChargeQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}