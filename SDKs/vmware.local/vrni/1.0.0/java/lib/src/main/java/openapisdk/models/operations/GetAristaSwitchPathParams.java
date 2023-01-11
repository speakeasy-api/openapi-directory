package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAristaSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAristaSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}