package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableVcenterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableVcenterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}