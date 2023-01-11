package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelGroupVbQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=file_ids")
    public String fileIds;
    public DelGroupVbQueryParams withFileIds(String fileIds) {
        this.fileIds = fileIds;
        return this;
    }
}