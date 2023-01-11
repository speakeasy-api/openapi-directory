package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscribeRequestSubscribeOptions
 *  This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription.
 * The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's `AutoPay` flag is true.
 * 
 * 
 * **Values:** A valid SubscribeOptions object. 
**/
public class SubscribeRequestSubscribeOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationOrder")
    public String[] applicationOrder;
    public SubscribeRequestSubscribeOptions withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyCredit")
    public Boolean applyCredit;
    public SubscribeRequestSubscribeOptions withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyCreditBalance")
    public Boolean applyCreditBalance;
    public SubscribeRequestSubscribeOptions withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElectronicPaymentOptions")
    public SubscribeRequestSubscribeOptionsElectronicPaymentOptions electronicPaymentOptions;
    public SubscribeRequestSubscribeOptions withElectronicPaymentOptions(SubscribeRequestSubscribeOptionsElectronicPaymentOptions electronicPaymentOptions) {
        this.electronicPaymentOptions = electronicPaymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalPaymentOptions")
    public SubscribeRequestSubscribeOptionsExternalPaymentOptions externalPaymentOptions;
    public SubscribeRequestSubscribeOptions withExternalPaymentOptions(SubscribeRequestSubscribeOptionsExternalPaymentOptions externalPaymentOptions) {
        this.externalPaymentOptions = externalPaymentOptions;
        return this;
    }
    @JsonProperty("GenerateInvoice")
    public Boolean generateInvoice;
    public SubscribeRequestSubscribeOptions withGenerateInvoice(Boolean generateInvoice) {
        this.generateInvoice = generateInvoice;
        return this;
    }
    @JsonProperty("ProcessPayments")
    public Boolean processPayments;
    public SubscribeRequestSubscribeOptions withProcessPayments(Boolean processPayments) {
        this.processPayments = processPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscribeInvoiceProcessingOptions")
    public SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions subscribeInvoiceProcessingOptions;
    public SubscribeRequestSubscribeOptions withSubscribeInvoiceProcessingOptions(SubscribeRequestSubscribeOptionsSubscribeInvoiceProcessingOptions subscribeInvoiceProcessingOptions) {
        this.subscribeInvoiceProcessingOptions = subscribeInvoiceProcessingOptions;
        return this;
    }
}