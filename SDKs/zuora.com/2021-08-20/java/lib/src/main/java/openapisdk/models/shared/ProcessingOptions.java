package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessingOptions
 * Invoice or Payment.
**/
public class ProcessingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationOrder")
    public String[] applicationOrder;
    public ProcessingOptions withApplicationOrder(String[] applicationOrder) {
        this.applicationOrder = applicationOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCredit")
    public Boolean applyCredit;
    public ProcessingOptions withApplyCredit(Boolean applyCredit) {
        this.applyCredit = applyCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyCreditBalance")
    public Boolean applyCreditBalance;
    public ProcessingOptions withApplyCreditBalance(Boolean applyCreditBalance) {
        this.applyCreditBalance = applyCreditBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingOptions")
    public BillingOptions billingOptions;
    public ProcessingOptions withBillingOptions(BillingOptions billingOptions) {
        this.billingOptions = billingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectPayment")
    public Boolean collectPayment;
    public ProcessingOptions withCollectPayment(Boolean collectPayment) {
        this.collectPayment = collectPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronicPaymentOptions")
    public ProcessingOptionsElectronicPaymentOptions electronicPaymentOptions;
    public ProcessingOptions withElectronicPaymentOptions(ProcessingOptionsElectronicPaymentOptions electronicPaymentOptions) {
        this.electronicPaymentOptions = electronicPaymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runBilling")
    public Boolean runBilling;
    public ProcessingOptions withRunBilling(Boolean runBilling) {
        this.runBilling = runBilling;
        return this;
    }
}