package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSforSubscChargeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRSforSubscChargeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}