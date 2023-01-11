package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetContactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetContactQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}