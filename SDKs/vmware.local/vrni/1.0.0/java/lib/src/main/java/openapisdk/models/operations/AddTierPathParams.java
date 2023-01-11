package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AddTierPathParams withId(String id) {
        this.id = id;
        return this;
    }
}