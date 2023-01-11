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

public class ProxyGetBillRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public ProxyGetBillRun withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoEmail")
    public Boolean autoEmail;
    public ProxyGetBillRun withAutoEmail(Boolean autoEmail) {
        this.autoEmail = autoEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoPost")
    public Boolean autoPost;
    public ProxyGetBillRun withAutoPost(Boolean autoPost) {
        this.autoPost = autoPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenewal")
    public Boolean autoRenewal;
    public ProxyGetBillRun withAutoRenewal(Boolean autoRenewal) {
        this.autoRenewal = autoRenewal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Batch")
    public String batch;
    public ProxyGetBillRun withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillCycleDay")
    public String billCycleDay;
    public ProxyGetBillRun withBillCycleDay(String billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillRunNumber")
    public String billRunNumber;
    public ProxyGetBillRun withBillRunNumber(String billRunNumber) {
        this.billRunNumber = billRunNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public ProxyGetBillRun withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public ProxyGetBillRun withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExecutedDate")
    public OffsetDateTime executedDate;
    public ProxyGetBillRun withExecutedDate(OffsetDateTime executedDate) {
        this.executedDate = executedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetBillRun withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceDate")
    public LocalDate invoiceDate;
    public ProxyGetBillRun withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoicesEmailed")
    public Boolean invoicesEmailed;
    public ProxyGetBillRun withInvoicesEmailed(Boolean invoicesEmailed) {
        this.invoicesEmailed = invoicesEmailed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastEmailSentTime")
    public OffsetDateTime lastEmailSentTime;
    public ProxyGetBillRun withLastEmailSentTime(OffsetDateTime lastEmailSentTime) {
        this.lastEmailSentTime = lastEmailSentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoEmailForZeroAmountInvoice")
    public Boolean noEmailForZeroAmountInvoice;
    public ProxyGetBillRun withNoEmailForZeroAmountInvoice(Boolean noEmailForZeroAmountInvoice) {
        this.noEmailForZeroAmountInvoice = noEmailForZeroAmountInvoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfAccounts")
    public Long numberOfAccounts;
    public ProxyGetBillRun withNumberOfAccounts(Long numberOfAccounts) {
        this.numberOfAccounts = numberOfAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfInvoices")
    public Long numberOfInvoices;
    public ProxyGetBillRun withNumberOfInvoices(Long numberOfInvoices) {
        this.numberOfInvoices = numberOfInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public ProxyGetBillRun withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetDate")
    public LocalDate targetDate;
    public ProxyGetBillRun withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public ProxyGetBillRun withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public ProxyGetBillRun withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}