package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostImportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rejectUnknownFields")
    public Boolean rejectUnknownFields;
    public ObjectPostImportQueryParams withRejectUnknownFields(Boolean rejectUnknownFields) {
        this.rejectUnknownFields = rejectUnknownFields;
        return this;
    }
}