package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDellSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDellSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}