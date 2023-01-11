package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPotPaymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetPotPaymentsQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetPotPaymentsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payment_type")
    public String paymentType;
    public GetPotPaymentsQueryParams withPaymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=purpose")
    public String purpose;
    public GetPotPaymentsQueryParams withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_provider")
    public String serviceProvider;
    public GetPotPaymentsQueryParams withServiceProvider(String serviceProvider) {
        this.serviceProvider = serviceProvider;
        return this;
    }
}