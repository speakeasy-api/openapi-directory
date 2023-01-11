package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableBrocadeSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableBrocadeSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}