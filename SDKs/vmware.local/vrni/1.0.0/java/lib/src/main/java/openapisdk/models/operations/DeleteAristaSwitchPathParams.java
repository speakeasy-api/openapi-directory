package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAristaSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteAristaSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}