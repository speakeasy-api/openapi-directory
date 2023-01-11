package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableAristaSwitchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EnableAristaSwitchPathParams withId(String id) {
        this.id = id;
        return this;
    }
}