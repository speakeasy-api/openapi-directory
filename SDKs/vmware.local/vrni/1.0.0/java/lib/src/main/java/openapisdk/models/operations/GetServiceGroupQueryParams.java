package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetServiceGroupQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}