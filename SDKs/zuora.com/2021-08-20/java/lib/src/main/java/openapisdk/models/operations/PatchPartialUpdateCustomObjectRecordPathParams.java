package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPartialUpdateCustomObjectRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchPartialUpdateCustomObjectRecordPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public PatchPartialUpdateCustomObjectRecordPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}