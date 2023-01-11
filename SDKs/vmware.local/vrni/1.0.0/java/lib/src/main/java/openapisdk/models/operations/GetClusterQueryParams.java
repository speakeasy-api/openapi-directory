package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetClusterQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}