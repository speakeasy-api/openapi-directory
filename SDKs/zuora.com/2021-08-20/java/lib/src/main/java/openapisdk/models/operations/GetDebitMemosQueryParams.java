package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDebitMemosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetDebitMemosQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public GetDebitMemosQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=balance")
    public Double balance;
    public GetDebitMemosQueryParams withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=beAppliedAmount")
    public Double beAppliedAmount;
    public GetDebitMemosQueryParams withBeAppliedAmount(Double beAppliedAmount) {
        this.beAppliedAmount = beAppliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetDebitMemosQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetDebitMemosQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetDebitMemosQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=debitMemoDate")
    public LocalDate debitMemoDate;
    public GetDebitMemosQueryParams withDebitMemoDate(LocalDate debitMemoDate) {
        this.debitMemoDate = debitMemoDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dueDate")
    public LocalDate dueDate;
    public GetDebitMemosQueryParams withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetDebitMemosQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetDebitMemosQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=referredInvoiceId")
    public String referredInvoiceId;
    public GetDebitMemosQueryParams withReferredInvoiceId(String referredInvoiceId) {
        this.referredInvoiceId = referredInvoiceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDebitMemosQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum2 status;
    public GetDebitMemosQueryParams withStatus(openapisdk.models.shared.GlobalRequestPageSizeEnum2 status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetDate")
    public LocalDate targetDate;
    public GetDebitMemosQueryParams withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxAmount")
    public Double taxAmount;
    public GetDebitMemosQueryParams withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=totalTaxExemptAmount")
    public Double totalTaxExemptAmount;
    public GetDebitMemosQueryParams withTotalTaxExemptAmount(Double totalTaxExemptAmount) {
        this.totalTaxExemptAmount = totalTaxExemptAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetDebitMemosQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetDebitMemosQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}