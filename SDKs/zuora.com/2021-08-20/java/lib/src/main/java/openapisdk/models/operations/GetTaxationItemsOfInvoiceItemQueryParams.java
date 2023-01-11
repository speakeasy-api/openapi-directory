package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaxationItemsOfInvoiceItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTaxationItemsOfInvoiceItemQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetTaxationItemsOfInvoiceItemQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}