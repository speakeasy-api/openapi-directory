package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public GetFilePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}