package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public UpdateFilePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}