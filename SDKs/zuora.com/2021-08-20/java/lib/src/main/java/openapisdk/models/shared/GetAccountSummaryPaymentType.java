package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountSummaryPaymentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public GetAccountSummaryPaymentType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAccountSummaryPaymentType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidInvoices")
    public GetAccountSummaryPaymentInvoiceType[] paidInvoices;
    public GetAccountSummaryPaymentType withPaidInvoices(GetAccountSummaryPaymentInvoiceType[] paidInvoices) {
        this.paidInvoices = paidInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentNumber")
    public String paymentNumber;
    public GetAccountSummaryPaymentType withPaymentNumber(String paymentNumber) {
        this.paymentNumber = paymentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentType")
    public String paymentType;
    public GetAccountSummaryPaymentType withPaymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetAccountSummaryPaymentType withStatus(String status) {
        this.status = status;
        return this;
    }
}