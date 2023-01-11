package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetUnitOfMeasureQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetUnitOfMeasureQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}