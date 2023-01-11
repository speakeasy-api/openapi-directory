package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVmknicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetVmknicPathParams withId(String id) {
        this.id = id;
        return this;
    }
}