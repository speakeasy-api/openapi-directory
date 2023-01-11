package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetRatePlanChargeTierQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetRatePlanChargeTierQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}