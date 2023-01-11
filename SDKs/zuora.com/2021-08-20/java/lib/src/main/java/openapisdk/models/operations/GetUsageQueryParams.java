package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetUsageQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}