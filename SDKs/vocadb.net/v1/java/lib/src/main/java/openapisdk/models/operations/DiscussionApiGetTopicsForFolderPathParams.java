package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiGetTopicsForFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=folderId")
    public Integer folderId;
    public DiscussionApiGetTopicsForFolderPathParams withFolderId(Integer folderId) {
        this.folderId = folderId;
        return this;
    }
}