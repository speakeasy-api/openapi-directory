package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableCiscoSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableCiscoSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}