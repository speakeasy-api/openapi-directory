package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAristaSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateAristaSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}