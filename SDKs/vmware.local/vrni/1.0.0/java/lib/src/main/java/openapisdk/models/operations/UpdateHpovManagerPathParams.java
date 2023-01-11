package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHpovManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateHpovManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}