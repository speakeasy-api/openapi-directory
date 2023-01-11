package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableUcsManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableUcsManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}