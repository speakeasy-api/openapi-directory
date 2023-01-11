package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntityByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEntityByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}