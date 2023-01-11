package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file-id")
    public String fileId;
    public GetFilesPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}