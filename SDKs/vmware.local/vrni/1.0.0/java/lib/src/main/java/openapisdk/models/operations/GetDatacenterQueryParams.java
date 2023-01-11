package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatacenterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetDatacenterQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}