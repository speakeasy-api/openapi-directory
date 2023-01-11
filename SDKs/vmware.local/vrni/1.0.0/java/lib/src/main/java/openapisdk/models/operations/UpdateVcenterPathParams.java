package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVcenterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateVcenterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}