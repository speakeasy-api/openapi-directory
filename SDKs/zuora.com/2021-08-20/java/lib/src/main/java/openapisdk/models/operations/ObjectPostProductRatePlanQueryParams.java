package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostProductRatePlanQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rejectUnknownFields")
    public Boolean rejectUnknownFields;
    public ObjectPostProductRatePlanQueryParams withRejectUnknownFields(Boolean rejectUnknownFields) {
        this.rejectUnknownFields = rejectUnknownFields;
        return this;
    }
}