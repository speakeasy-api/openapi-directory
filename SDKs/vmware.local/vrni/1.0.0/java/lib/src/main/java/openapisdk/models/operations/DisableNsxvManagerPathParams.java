package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableNsxvManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DisableNsxvManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}