package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetRefundsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetRefundsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public GetRefundsQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetRefundsQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetRefundsQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=methodType")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum7 methodType;
    public GetRefundsQueryParams withMethodType(openapisdk.models.shared.GlobalRequestPageSizeEnum7 methodType) {
        this.methodType = methodType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetRefundsQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRefundsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=paymentId")
    public String paymentId;
    public GetRefundsQueryParams withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refundDate")
    public LocalDate refundDate;
    public GetRefundsQueryParams withRefundDate(LocalDate refundDate) {
        this.refundDate = refundDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetRefundsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum8 status;
    public GetRefundsQueryParams withStatus(openapisdk.models.shared.GlobalRequestPageSizeEnum8 status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum6 type;
    public GetRefundsQueryParams withType(openapisdk.models.shared.GlobalRequestPageSizeEnum6 type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetRefundsQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetRefundsQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}