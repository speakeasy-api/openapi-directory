package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFileAssociationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public CreateFileAssociationPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}