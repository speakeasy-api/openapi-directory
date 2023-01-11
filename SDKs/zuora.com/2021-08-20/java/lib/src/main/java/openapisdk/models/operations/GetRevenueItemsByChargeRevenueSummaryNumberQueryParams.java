package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueItemsByChargeRevenueSummaryNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRevenueItemsByChargeRevenueSummaryNumberQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}