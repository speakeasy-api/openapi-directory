package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostFeatureQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rejectUnknownFields")
    public Boolean rejectUnknownFields;
    public ObjectPostFeatureQueryParams withRejectUnknownFields(Boolean rejectUnknownFields) {
        this.rejectUnknownFields = rejectUnknownFields;
        return this;
    }
}