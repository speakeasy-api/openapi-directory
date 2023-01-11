package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBrocadeSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteBrocadeSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}