package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHpovManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetHpovManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}