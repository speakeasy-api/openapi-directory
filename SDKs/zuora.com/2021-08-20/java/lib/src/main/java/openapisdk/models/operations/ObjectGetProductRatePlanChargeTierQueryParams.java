package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetProductRatePlanChargeTierQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetProductRatePlanChargeTierQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}