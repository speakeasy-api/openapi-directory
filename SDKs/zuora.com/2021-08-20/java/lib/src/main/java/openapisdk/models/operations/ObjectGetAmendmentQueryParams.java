package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetAmendmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetAmendmentQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}