package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetRetrieveAllPaymentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetRetrieveAllPaymentsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public GetRetrieveAllPaymentsQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appliedAmount")
    public Double appliedAmount;
    public GetRetrieveAllPaymentsQueryParams withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetRetrieveAllPaymentsQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetRetrieveAllPaymentsQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creditBalanceAmount")
    public Double creditBalanceAmount;
    public GetRetrieveAllPaymentsQueryParams withCreditBalanceAmount(Double creditBalanceAmount) {
        this.creditBalanceAmount = creditBalanceAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetRetrieveAllPaymentsQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=effectiveDate")
    public OffsetDateTime effectiveDate;
    public GetRetrieveAllPaymentsQueryParams withEffectiveDate(OffsetDateTime effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetRetrieveAllPaymentsQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetRetrieveAllPaymentsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refundAmount")
    public Double refundAmount;
    public GetRetrieveAllPaymentsQueryParams withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetRetrieveAllPaymentsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum5 status;
    public GetRetrieveAllPaymentsQueryParams withStatus(openapisdk.models.shared.GlobalRequestPageSizeEnum5 status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum6 type;
    public GetRetrieveAllPaymentsQueryParams withType(openapisdk.models.shared.GlobalRequestPageSizeEnum6 type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unappliedAmount")
    public Double unappliedAmount;
    public GetRetrieveAllPaymentsQueryParams withUnappliedAmount(Double unappliedAmount) {
        this.unappliedAmount = unappliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetRetrieveAllPaymentsQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetRetrieveAllPaymentsQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}