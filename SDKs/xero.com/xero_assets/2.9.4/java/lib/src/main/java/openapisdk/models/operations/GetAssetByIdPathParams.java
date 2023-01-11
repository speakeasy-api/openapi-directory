package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAssetByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}