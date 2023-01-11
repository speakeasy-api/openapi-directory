package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFlowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetFlowPathParams withId(String id) {
        this.id = id;
        return this;
    }
}