package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueItemsByRevenueScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRevenueItemsByRevenueScheduleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}