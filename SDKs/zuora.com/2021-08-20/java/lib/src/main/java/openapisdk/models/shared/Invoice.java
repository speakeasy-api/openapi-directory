package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Invoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public Invoice withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdjustmentAmount")
    public Double adjustmentAmount;
    public Invoice withAdjustmentAmount(Double adjustmentAmount) {
        this.adjustmentAmount = adjustmentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public Invoice withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmountWithoutTax")
    public Double amountWithoutTax;
    public Invoice withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Balance")
    public Double balance;
    public Invoice withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillRunId")
    public String billRunId;
    public Invoice withBillRunId(String billRunId) {
        this.billRunId = billRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public Invoice withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Comments")
    public String comments;
    public Invoice withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public Invoice withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public Invoice withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditBalanceAdjustmentAmount")
    public Double creditBalanceAdjustmentAmount;
    public Invoice withCreditBalanceAdjustmentAmount(Double creditBalanceAdjustmentAmount) {
        this.creditBalanceAdjustmentAmount = creditBalanceAdjustmentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DueDate")
    public LocalDate dueDate;
    public Invoice withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludesOneTime")
    public Boolean includesOneTime;
    public Invoice withIncludesOneTime(Boolean includesOneTime) {
        this.includesOneTime = includesOneTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludesRecurring")
    public Boolean includesRecurring;
    public Invoice withIncludesRecurring(Boolean includesRecurring) {
        this.includesRecurring = includesRecurring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludesUsage")
    public Boolean includesUsage;
    public Invoice withIncludesUsage(Boolean includesUsage) {
        this.includesUsage = includesUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceDate")
    public LocalDate invoiceDate;
    public Invoice withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceNumber")
    public String invoiceNumber;
    public Invoice withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastEmailSentDate")
    public OffsetDateTime lastEmailSentDate;
    public Invoice withLastEmailSentDate(OffsetDateTime lastEmailSentDate) {
        this.lastEmailSentDate = lastEmailSentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentAmount")
    public Double paymentAmount;
    public Invoice withPaymentAmount(Double paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostedBy")
    public String postedBy;
    public Invoice withPostedBy(String postedBy) {
        this.postedBy = postedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("PostedDate")
    public OffsetDateTime postedDate;
    public Invoice withPostedDate(OffsetDateTime postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefundAmount")
    public Double refundAmount;
    public Invoice withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegenerateInvoicePDF")
    public Boolean regenerateInvoicePDF;
    public Invoice withRegenerateInvoicePdf(Boolean regenerateInvoicePDF) {
        this.regenerateInvoicePDF = regenerateInvoicePDF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public Invoice withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetDate")
    public LocalDate targetDate;
    public Invoice withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxAmount")
    public Double taxAmount;
    public Invoice withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxExemptAmount")
    public Double taxExemptAmount;
    public Invoice withTaxExemptAmount(Double taxExemptAmount) {
        this.taxExemptAmount = taxExemptAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransferredToAccounting")
    public String transferredToAccounting;
    public Invoice withTransferredToAccounting(String transferredToAccounting) {
        this.transferredToAccounting = transferredToAccounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public Invoice withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public Invoice withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}