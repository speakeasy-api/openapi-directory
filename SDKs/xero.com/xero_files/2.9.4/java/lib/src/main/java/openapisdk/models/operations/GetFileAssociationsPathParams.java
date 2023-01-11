package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public GetFileAssociationsPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}