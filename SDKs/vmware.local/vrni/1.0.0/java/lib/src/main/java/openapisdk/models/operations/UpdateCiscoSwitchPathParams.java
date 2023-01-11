package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCiscoSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateCiscoSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}