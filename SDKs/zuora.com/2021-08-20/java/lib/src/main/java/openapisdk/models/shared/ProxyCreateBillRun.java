package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyCreateBillRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public ProxyCreateBillRun withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoEmail")
    public Boolean autoEmail;
    public ProxyCreateBillRun withAutoEmail(Boolean autoEmail) {
        this.autoEmail = autoEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoPost")
    public Boolean autoPost;
    public ProxyCreateBillRun withAutoPost(Boolean autoPost) {
        this.autoPost = autoPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenewal")
    public Boolean autoRenewal;
    public ProxyCreateBillRun withAutoRenewal(Boolean autoRenewal) {
        this.autoRenewal = autoRenewal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Batch")
    public String batch;
    public ProxyCreateBillRun withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillCycleDay")
    public String billCycleDay;
    public ProxyCreateBillRun withBillCycleDay(String billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeTypeToExclude")
    public String chargeTypeToExclude;
    public ProxyCreateBillRun withChargeTypeToExclude(String chargeTypeToExclude) {
        this.chargeTypeToExclude = chargeTypeToExclude;
        return this;
    }
    @JsonProperty("InvoiceDate")
    public LocalDate invoiceDate;
    public ProxyCreateBillRun withInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoEmailForZeroAmountInvoice")
    public Boolean noEmailForZeroAmountInvoice;
    public ProxyCreateBillRun withNoEmailForZeroAmountInvoice(Boolean noEmailForZeroAmountInvoice) {
        this.noEmailForZeroAmountInvoice = noEmailForZeroAmountInvoice;
        return this;
    }
    @JsonProperty("TargetDate")
    public LocalDate targetDate;
    public ProxyCreateBillRun withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}