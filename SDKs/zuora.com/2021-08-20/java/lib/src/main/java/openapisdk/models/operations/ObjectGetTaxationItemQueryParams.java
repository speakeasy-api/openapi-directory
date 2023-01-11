package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetTaxationItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetTaxationItemQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}