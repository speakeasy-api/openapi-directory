package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVmknicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetVmknicQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}