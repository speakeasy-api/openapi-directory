package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVcenterManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVcenterManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}