package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FolderId")
    public String folderId;
    public UploadFileQueryParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}