package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetCreditMemosQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public GetCreditMemosQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appliedAmount")
    public Double appliedAmount;
    public GetCreditMemosQueryParams withAppliedAmount(Double appliedAmount) {
        this.appliedAmount = appliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoApplyUponPosting")
    public Boolean autoApplyUponPosting;
    public GetCreditMemosQueryParams withAutoApplyUponPosting(Boolean autoApplyUponPosting) {
        this.autoApplyUponPosting = autoApplyUponPosting;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetCreditMemosQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetCreditMemosQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creditMemoDate")
    public LocalDate creditMemoDate;
    public GetCreditMemosQueryParams withCreditMemoDate(LocalDate creditMemoDate) {
        this.creditMemoDate = creditMemoDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetCreditMemosQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeFromAutoApplyRules")
    public Boolean excludeFromAutoApplyRules;
    public GetCreditMemosQueryParams withExcludeFromAutoApplyRules(Boolean excludeFromAutoApplyRules) {
        this.excludeFromAutoApplyRules = excludeFromAutoApplyRules;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetCreditMemosQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetCreditMemosQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=referredInvoiceId")
    public String referredInvoiceId;
    public GetCreditMemosQueryParams withReferredInvoiceId(String referredInvoiceId) {
        this.referredInvoiceId = referredInvoiceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refundAmount")
    public Double refundAmount;
    public GetCreditMemosQueryParams withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetCreditMemosQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum2 status;
    public GetCreditMemosQueryParams withStatus(openapisdk.models.shared.GlobalRequestPageSizeEnum2 status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetDate")
    public LocalDate targetDate;
    public GetCreditMemosQueryParams withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxAmount")
    public Double taxAmount;
    public GetCreditMemosQueryParams withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=totalTaxExemptAmount")
    public Double totalTaxExemptAmount;
    public GetCreditMemosQueryParams withTotalTaxExemptAmount(Double totalTaxExemptAmount) {
        this.totalTaxExemptAmount = totalTaxExemptAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transferredToAccounting")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum3 transferredToAccounting;
    public GetCreditMemosQueryParams withTransferredToAccounting(openapisdk.models.shared.GlobalRequestPageSizeEnum3 transferredToAccounting) {
        this.transferredToAccounting = transferredToAccounting;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unappliedAmount")
    public Double unappliedAmount;
    public GetCreditMemosQueryParams withUnappliedAmount(Double unappliedAmount) {
        this.unappliedAmount = unappliedAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetCreditMemosQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetCreditMemosQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}