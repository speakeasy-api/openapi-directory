package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNsxvManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetNsxvManagerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}