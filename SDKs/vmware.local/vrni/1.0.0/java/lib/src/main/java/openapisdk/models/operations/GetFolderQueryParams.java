package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFolderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetFolderQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}