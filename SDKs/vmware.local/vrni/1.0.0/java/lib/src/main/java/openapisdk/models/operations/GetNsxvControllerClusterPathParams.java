package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNsxvControllerClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetNsxvControllerClusterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}