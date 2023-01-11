package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableBrocadeSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableBrocadeSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}