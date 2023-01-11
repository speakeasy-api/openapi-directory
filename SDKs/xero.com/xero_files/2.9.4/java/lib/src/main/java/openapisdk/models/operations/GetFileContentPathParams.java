package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public GetFileContentPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}