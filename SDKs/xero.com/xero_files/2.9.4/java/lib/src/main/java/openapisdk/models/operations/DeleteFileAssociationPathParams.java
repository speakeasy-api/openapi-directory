package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFileAssociationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileId")
    public String fileId;
    public DeleteFileAssociationPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ObjectId")
    public String objectId;
    public DeleteFileAssociationPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
}