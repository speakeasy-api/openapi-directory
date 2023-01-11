package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableHpovManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableHpovManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}