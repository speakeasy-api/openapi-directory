package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBrocadeSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBrocadeSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}