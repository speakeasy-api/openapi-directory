package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomObjectRecordsBatchUpdateOrDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public PostCustomObjectRecordsBatchUpdateOrDeletePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}