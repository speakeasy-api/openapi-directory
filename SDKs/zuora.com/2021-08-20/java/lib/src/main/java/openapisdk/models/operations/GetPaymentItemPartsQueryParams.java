package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentItemPartsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetPaymentItemPartsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}