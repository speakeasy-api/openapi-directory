package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAccountTypeBillingAndPayment
 * Container for billing and payment information for the account.
 * 
**/
public class GetAccountTypeBillingAndPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalEmailAddresses")
    public String[] additionalEmailAddresses;
    public GetAccountTypeBillingAndPayment withAdditionalEmailAddresses(String[] additionalEmailAddresses) {
        this.additionalEmailAddresses = additionalEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public String billCycleDay;
    public GetAccountTypeBillingAndPayment withBillCycleDay(String billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetAccountTypeBillingAndPayment withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceDeliveryPrefsEmail")
    public Boolean invoiceDeliveryPrefsEmail;
    public GetAccountTypeBillingAndPayment withInvoiceDeliveryPrefsEmail(Boolean invoiceDeliveryPrefsEmail) {
        this.invoiceDeliveryPrefsEmail = invoiceDeliveryPrefsEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceDeliveryPrefsPrint")
    public Boolean invoiceDeliveryPrefsPrint;
    public GetAccountTypeBillingAndPayment withInvoiceDeliveryPrefsPrint(Boolean invoiceDeliveryPrefsPrint) {
        this.invoiceDeliveryPrefsPrint = invoiceDeliveryPrefsPrint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGateway")
    public String paymentGateway;
    public GetAccountTypeBillingAndPayment withPaymentGateway(String paymentGateway) {
        this.paymentGateway = paymentGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentTerm")
    public String paymentTerm;
    public GetAccountTypeBillingAndPayment withPaymentTerm(String paymentTerm) {
        this.paymentTerm = paymentTerm;
        return this;
    }
}