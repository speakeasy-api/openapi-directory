package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public DeleteFilePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}