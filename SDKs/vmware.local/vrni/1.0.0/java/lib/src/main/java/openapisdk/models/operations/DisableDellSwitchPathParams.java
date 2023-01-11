package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableDellSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableDellSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}