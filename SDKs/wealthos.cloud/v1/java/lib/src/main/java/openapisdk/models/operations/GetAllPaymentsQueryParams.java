package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllPaymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetAllPaymentsQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetAllPaymentsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payment_type")
    public String paymentType;
    public GetAllPaymentsQueryParams withPaymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=purpose")
    public String purpose;
    public GetAllPaymentsQueryParams withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service_provider")
    public String serviceProvider;
    public GetAllPaymentsQueryParams withServiceProvider(String serviceProvider) {
        this.serviceProvider = serviceProvider;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetAllPaymentsSortEnum sort;
    public GetAllPaymentsQueryParams withSort(GetAllPaymentsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}