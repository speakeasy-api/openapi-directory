package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatacenterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDatacenterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}