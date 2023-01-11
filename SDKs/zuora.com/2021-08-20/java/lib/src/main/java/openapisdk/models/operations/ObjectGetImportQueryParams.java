package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetImportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetImportQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}