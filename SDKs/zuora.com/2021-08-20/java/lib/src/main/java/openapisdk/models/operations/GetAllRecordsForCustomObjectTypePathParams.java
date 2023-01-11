package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllRecordsForCustomObjectTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetAllRecordsForCustomObjectTypePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}