package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentMethodsCreditCardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetPaymentMethodsCreditCardQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}