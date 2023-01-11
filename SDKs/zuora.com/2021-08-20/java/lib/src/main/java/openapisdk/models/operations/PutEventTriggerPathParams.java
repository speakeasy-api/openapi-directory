package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventTriggerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutEventTriggerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}