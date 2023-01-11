package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomObjectRecordsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public PostCustomObjectRecordsPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}