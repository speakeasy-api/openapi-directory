package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetClusterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}