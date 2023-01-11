package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVmQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetVmQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}