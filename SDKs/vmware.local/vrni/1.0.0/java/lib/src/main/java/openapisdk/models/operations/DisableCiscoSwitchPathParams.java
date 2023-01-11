package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableCiscoSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableCiscoSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}