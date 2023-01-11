package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount
 * Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
 * 
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 * 
 * If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
 * 
**/
public class CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoPay")
    public Boolean autoPay;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withAutoPay(Boolean autoPay) {
        this.autoPay = autoPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch")
    public String batch;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonProperty("billCycleDay")
    public Long billCycleDay;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withBillCycleDay(Long billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonProperty("billToContact")
    public java.util.Map<String, Object> billToContact;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withBillToContact(java.util.Map<String, Object> billToContact) {
        this.billToContact = billToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationProfileId")
    public String communicationProfileId;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withCommunicationProfileId(String communicationProfileId) {
        this.communicationProfileId = communicationProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCard")
    public CreditCard creditCard;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withCreditCard(CreditCard creditCard) {
        this.creditCard = creditCard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crmId")
    public String crmId;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withCrmId(String crmId) {
        this.crmId = crmId;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hpmCreditCardPaymentMethodId")
    public String hpmCreditCardPaymentMethodId;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withHpmCreditCardPaymentMethodId(String hpmCreditCardPaymentMethodId) {
        this.hpmCreditCardPaymentMethodId = hpmCreditCardPaymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceDeliveryPrefsEmail")
    public Boolean invoiceDeliveryPrefsEmail;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withInvoiceDeliveryPrefsEmail(Boolean invoiceDeliveryPrefsEmail) {
        this.invoiceDeliveryPrefsEmail = invoiceDeliveryPrefsEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceDeliveryPrefsPrint")
    public Boolean invoiceDeliveryPrefsPrint;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withInvoiceDeliveryPrefsPrint(Boolean invoiceDeliveryPrefsPrint) {
        this.invoiceDeliveryPrefsPrint = invoiceDeliveryPrefsPrint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceTemplateId")
    public String invoiceTemplateId;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withInvoiceTemplateId(String invoiceTemplateId) {
        this.invoiceTemplateId = invoiceTemplateId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentId")
    public String parentId;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGateway")
    public String paymentGateway;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withPaymentGateway(String paymentGateway) {
        this.paymentGateway = paymentGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethod")
    public java.util.Map<String, Object> paymentMethod;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withPaymentMethod(java.util.Map<String, Object> paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentTerm")
    public String paymentTerm;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withPaymentTerm(String paymentTerm) {
        this.paymentTerm = paymentTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldToContact")
    public java.util.Map<String, Object> soldToContact;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withSoldToContact(java.util.Map<String, Object> soldToContact) {
        this.soldToContact = soldToContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxInfo")
    public TaxInfo taxInfo;
    public CreateSubscriptionForEvergreenNewSubscriptionOwnerAccount withTaxInfo(TaxInfo taxInfo) {
        this.taxInfo = taxInfo;
        return this;
    }
}