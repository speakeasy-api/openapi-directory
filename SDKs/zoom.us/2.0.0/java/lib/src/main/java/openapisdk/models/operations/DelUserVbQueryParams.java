package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelUserVbQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_ids")
    public String fileIds;
    public DelUserVbQueryParams withFileIds(String fileIds) {
        this.fileIds = fileIds;
        return this;
    }
}