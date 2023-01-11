package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributedVirtualSwitchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetDistributedVirtualSwitchQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}