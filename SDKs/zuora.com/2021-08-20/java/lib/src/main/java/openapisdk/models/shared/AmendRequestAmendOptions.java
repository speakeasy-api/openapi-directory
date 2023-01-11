package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmendRequestAmendOptions
 * Use the `AmendOptions` container to specify billing options, such as invoice generation and when to process payments.
 * 
**/
public class AmendRequestAmendOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationOrder")
    public String[] applicationOrder;
    public AmendRequestAmendOptions withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyCredit")
    public Boolean applyCredit;
    public AmendRequestAmendOptions withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyCreditBalance")
    public Boolean applyCreditBalance;
    public AmendRequestAmendOptions withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElectronicPaymentOptions")
    public ElectronicPaymentOptions electronicPaymentOptions;
    public AmendRequestAmendOptions withElectronicPaymentOptions(ElectronicPaymentOptions electronicPaymentOptions) {
        this.electronicPaymentOptions = electronicPaymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalPaymentOptions")
    public ExternalPaymentOptions externalPaymentOptions;
    public AmendRequestAmendOptions withExternalPaymentOptions(ExternalPaymentOptions externalPaymentOptions) {
        this.externalPaymentOptions = externalPaymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GenerateInvoice")
    public Boolean generateInvoice;
    public AmendRequestAmendOptions withGenerateInvoice(Boolean generateInvoice) {
        this.generateInvoice = generateInvoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceProcessingOptions")
    public InvoiceProcessingOptions invoiceProcessingOptions;
    public AmendRequestAmendOptions withInvoiceProcessingOptions(InvoiceProcessingOptions invoiceProcessingOptions) {
        this.invoiceProcessingOptions = invoiceProcessingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessPayments")
    public Boolean processPayments;
    public AmendRequestAmendOptions withProcessPayments(Boolean processPayments) {
        this.processPayments = processPayments;
        return this;
    }
}