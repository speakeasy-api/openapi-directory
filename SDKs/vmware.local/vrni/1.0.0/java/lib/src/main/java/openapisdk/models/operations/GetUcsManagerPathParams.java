package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUcsManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetUcsManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}