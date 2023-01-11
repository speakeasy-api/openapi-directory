package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetCommunicationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetCommunicationProfileQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}