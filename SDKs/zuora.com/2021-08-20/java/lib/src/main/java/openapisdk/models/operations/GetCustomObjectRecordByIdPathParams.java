package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomObjectRecordByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCustomObjectRecordByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetCustomObjectRecordByIdPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}