package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FolderId")
    public String folderId;
    public UpdateFolderPathParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}