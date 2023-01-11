package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProblemEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetProblemEventPathParams withId(String id) {
        this.id = id;
        return this;
    }
}