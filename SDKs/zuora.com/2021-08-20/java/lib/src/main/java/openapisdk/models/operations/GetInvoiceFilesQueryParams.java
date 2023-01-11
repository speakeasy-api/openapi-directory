package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceFilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetInvoiceFilesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}