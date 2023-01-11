package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetServiceGroupPathParams withId(String id) {
        this.id = id;
        return this;
    }
}