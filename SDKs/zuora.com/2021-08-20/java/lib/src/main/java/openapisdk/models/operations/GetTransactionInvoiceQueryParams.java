package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionInvoiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetTransactionInvoiceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}