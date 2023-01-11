package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DestroyCallPathParams withId(String id) {
        this.id = id;
        return this;
    }
}