package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetInvoiceItemsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}