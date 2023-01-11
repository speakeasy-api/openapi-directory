package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributedVirtualPortgroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetDistributedVirtualPortgroupQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}