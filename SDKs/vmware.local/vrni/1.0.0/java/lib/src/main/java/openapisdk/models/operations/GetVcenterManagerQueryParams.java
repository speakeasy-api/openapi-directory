package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVcenterManagerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetVcenterManagerQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}