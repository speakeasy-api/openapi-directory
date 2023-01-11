package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeedConnectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetFeedConnectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}