package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueEventForRevenueScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRevenueEventForRevenueScheduleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}