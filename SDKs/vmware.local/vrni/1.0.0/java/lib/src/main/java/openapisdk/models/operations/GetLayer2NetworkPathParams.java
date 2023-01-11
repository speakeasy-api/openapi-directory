package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLayer2NetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetLayer2NetworkPathParams withId(String id) {
        this.id = id;
        return this;
    }
}