package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableVcenterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableVcenterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}