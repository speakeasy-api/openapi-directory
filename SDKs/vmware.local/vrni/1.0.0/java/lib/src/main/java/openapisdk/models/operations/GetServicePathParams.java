package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetServicePathParams withId(String id) {
        this.id = id;
        return this;
    }
}