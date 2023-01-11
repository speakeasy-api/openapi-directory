package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CallUnoldPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CallUnoldPathParams withId(String id) {
        this.id = id;
        return this;
    }
}