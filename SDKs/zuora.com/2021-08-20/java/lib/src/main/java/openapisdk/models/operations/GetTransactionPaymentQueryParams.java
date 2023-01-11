package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionPaymentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetTransactionPaymentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}