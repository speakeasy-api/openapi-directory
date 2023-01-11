package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundItemPartsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRefundItemPartsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}