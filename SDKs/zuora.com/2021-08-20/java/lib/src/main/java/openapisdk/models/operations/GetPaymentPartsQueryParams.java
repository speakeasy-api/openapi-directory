package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentPartsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetPaymentPartsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}