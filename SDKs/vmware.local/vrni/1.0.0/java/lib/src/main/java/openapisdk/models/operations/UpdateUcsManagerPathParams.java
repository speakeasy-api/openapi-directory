package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUcsManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateUcsManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}