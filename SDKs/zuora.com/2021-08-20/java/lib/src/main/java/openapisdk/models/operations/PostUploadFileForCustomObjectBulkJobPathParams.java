package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForCustomObjectBulkJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostUploadFileForCustomObjectBulkJobPathParams withId(String id) {
        this.id = id;
        return this;
    }
}