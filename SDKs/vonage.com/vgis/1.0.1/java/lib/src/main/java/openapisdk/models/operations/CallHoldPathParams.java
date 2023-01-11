package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CallHoldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CallHoldPathParams withId(String id) {
        this.id = id;
        return this;
    }
}