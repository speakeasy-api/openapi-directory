package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FolderId")
    public String folderId;
    public DeleteFolderPathParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}