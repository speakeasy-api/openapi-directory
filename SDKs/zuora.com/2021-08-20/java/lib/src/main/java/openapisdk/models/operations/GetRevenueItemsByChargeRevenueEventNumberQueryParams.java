package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueItemsByChargeRevenueEventNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRevenueItemsByChargeRevenueEventNumberQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}