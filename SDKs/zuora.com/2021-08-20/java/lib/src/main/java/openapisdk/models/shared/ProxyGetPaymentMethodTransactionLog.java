package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyGetPaymentMethodTransactionLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gateway")
    public String gateway;
    public ProxyGetPaymentMethodTransactionLog withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayReasonCode")
    public String gatewayReasonCode;
    public ProxyGetPaymentMethodTransactionLog withGatewayReasonCode(String gatewayReasonCode) {
        this.gatewayReasonCode = gatewayReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayReasonCodeDescription")
    public String gatewayReasonCodeDescription;
    public ProxyGetPaymentMethodTransactionLog withGatewayReasonCodeDescription(String gatewayReasonCodeDescription) {
        this.gatewayReasonCodeDescription = gatewayReasonCodeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayTransactionType")
    public String gatewayTransactionType;
    public ProxyGetPaymentMethodTransactionLog withGatewayTransactionType(String gatewayTransactionType) {
        this.gatewayTransactionType = gatewayTransactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetPaymentMethodTransactionLog withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodId")
    public String paymentMethodId;
    public ProxyGetPaymentMethodTransactionLog withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethodType")
    public String paymentMethodType;
    public ProxyGetPaymentMethodTransactionLog withPaymentMethodType(String paymentMethodType) {
        this.paymentMethodType = paymentMethodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestString")
    public String requestString;
    public ProxyGetPaymentMethodTransactionLog withRequestString(String requestString) {
        this.requestString = requestString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseString")
    public String responseString;
    public ProxyGetPaymentMethodTransactionLog withResponseString(String responseString) {
        this.responseString = responseString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransactionDate")
    public OffsetDateTime transactionDate;
    public ProxyGetPaymentMethodTransactionLog withTransactionDate(OffsetDateTime transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionId")
    public String transactionId;
    public ProxyGetPaymentMethodTransactionLog withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}