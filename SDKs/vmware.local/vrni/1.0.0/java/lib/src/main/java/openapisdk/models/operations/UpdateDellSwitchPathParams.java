package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDellSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateDellSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}