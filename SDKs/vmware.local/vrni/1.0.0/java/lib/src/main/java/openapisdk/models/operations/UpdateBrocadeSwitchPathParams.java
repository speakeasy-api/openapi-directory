package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBrocadeSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateBrocadeSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}