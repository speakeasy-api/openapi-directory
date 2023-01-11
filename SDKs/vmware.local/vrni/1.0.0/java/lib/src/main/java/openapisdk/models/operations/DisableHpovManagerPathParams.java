package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableHpovManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableHpovManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}