package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetExportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetExportQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}