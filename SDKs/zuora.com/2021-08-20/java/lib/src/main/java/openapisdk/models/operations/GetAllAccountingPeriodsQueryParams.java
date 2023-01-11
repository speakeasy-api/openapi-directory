package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllAccountingPeriodsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAllAccountingPeriodsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}