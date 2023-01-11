package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPaymentMethodDecryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountID")
    public String accountID;
    public PostPaymentMethodDecryption withAccountId(String accountID) {
        this.accountID = accountID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardHolderInfo")
    public PostPaymentMethodDecryptionCardHolderInfo cardHolderInfo;
    public PostPaymentMethodDecryption withCardHolderInfo(PostPaymentMethodDecryptionCardHolderInfo cardHolderInfo) {
        this.cardHolderInfo = cardHolderInfo;
        return this;
    }
    @JsonProperty("integrationType")
    public String integrationType;
    public PostPaymentMethodDecryption withIntegrationType(String integrationType) {
        this.integrationType = integrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public PostPaymentMethodDecryption withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonProperty("merchantID")
    public String merchantID;
    public PostPaymentMethodDecryption withMerchantId(String merchantID) {
        this.merchantID = merchantID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mitConsentAgreementSrc")
    public PostPaymentMethodDecryptionMitConsentAgreementSrcEnum mitConsentAgreementSrc;
    public PostPaymentMethodDecryption withMitConsentAgreementSrc(PostPaymentMethodDecryptionMitConsentAgreementSrcEnum mitConsentAgreementSrc) {
        this.mitConsentAgreementSrc = mitConsentAgreementSrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mitProfileAction")
    public PostPaymentMethodDecryptionMitProfileActionEnum mitProfileAction;
    public PostPaymentMethodDecryption withMitProfileAction(PostPaymentMethodDecryptionMitProfileActionEnum mitProfileAction) {
        this.mitProfileAction = mitProfileAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mitProfileType")
    public PostPaymentMethodDecryptionMitProfileTypeEnum mitProfileType;
    public PostPaymentMethodDecryption withMitProfileType(PostPaymentMethodDecryptionMitProfileTypeEnum mitProfileType) {
        this.mitProfileType = mitProfileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentGateway")
    public String paymentGateway;
    public PostPaymentMethodDecryption withPaymentGateway(String paymentGateway) {
        this.paymentGateway = paymentGateway;
        return this;
    }
    @JsonProperty("paymentToken")
    public java.util.Map<String, Object> paymentToken;
    public PostPaymentMethodDecryption withPaymentToken(java.util.Map<String, Object> paymentToken) {
        this.paymentToken = paymentToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processPayment")
    public Boolean processPayment;
    public PostPaymentMethodDecryption withProcessPayment(Boolean processPayment) {
        this.processPayment = processPayment;
        return this;
    }
}