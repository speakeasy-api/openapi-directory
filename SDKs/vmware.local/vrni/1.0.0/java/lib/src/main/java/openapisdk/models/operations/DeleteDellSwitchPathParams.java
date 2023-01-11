package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDellSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteDellSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}