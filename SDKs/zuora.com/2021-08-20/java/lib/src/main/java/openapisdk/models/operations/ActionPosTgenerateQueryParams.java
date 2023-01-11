package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTgenerateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rejectUnknownFields")
    public Boolean rejectUnknownFields;
    public ActionPosTgenerateQueryParams withRejectUnknownFields(Boolean rejectUnknownFields) {
        this.rejectUnknownFields = rejectUnknownFields;
        return this;
    }
}