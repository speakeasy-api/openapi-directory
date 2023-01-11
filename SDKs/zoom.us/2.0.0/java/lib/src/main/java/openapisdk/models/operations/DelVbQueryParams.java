package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelVbQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_ids")
    public String fileIds;
    public DelVbQueryParams withFileIds(String fileIds) {
        this.fileIds = fileIds;
        return this;
    }
}