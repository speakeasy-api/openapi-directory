package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetServiceQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}