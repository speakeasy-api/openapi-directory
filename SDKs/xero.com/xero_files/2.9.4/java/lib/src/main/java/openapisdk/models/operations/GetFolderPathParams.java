package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FolderId")
    public String folderId;
    public GetFolderPathParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}