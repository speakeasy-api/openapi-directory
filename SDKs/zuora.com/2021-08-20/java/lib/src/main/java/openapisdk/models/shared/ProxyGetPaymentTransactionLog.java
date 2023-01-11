package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyGetPaymentTransactionLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AVSResponseCode")
    public String avsResponseCode;
    public ProxyGetPaymentTransactionLog withAvsResponseCode(String avsResponseCode) {
        this.avsResponseCode = avsResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchId")
    public String batchId;
    public ProxyGetPaymentTransactionLog withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CVVResponseCode")
    public String cvvResponseCode;
    public ProxyGetPaymentTransactionLog withCvvResponseCode(String cvvResponseCode) {
        this.cvvResponseCode = cvvResponseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gateway")
    public String gateway;
    public ProxyGetPaymentTransactionLog withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayReasonCode")
    public String gatewayReasonCode;
    public ProxyGetPaymentTransactionLog withGatewayReasonCode(String gatewayReasonCode) {
        this.gatewayReasonCode = gatewayReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayReasonCodeDescription")
    public String gatewayReasonCodeDescription;
    public ProxyGetPaymentTransactionLog withGatewayReasonCodeDescription(String gatewayReasonCodeDescription) {
        this.gatewayReasonCodeDescription = gatewayReasonCodeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayState")
    public ProxyGetPaymentTransactionLogGatewayStateEnum gatewayState;
    public ProxyGetPaymentTransactionLog withGatewayState(ProxyGetPaymentTransactionLogGatewayStateEnum gatewayState) {
        this.gatewayState = gatewayState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GatewayTransactionType")
    public ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum gatewayTransactionType;
    public ProxyGetPaymentTransactionLog withGatewayTransactionType(ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum gatewayTransactionType) {
        this.gatewayTransactionType = gatewayTransactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetPaymentTransactionLog withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentId")
    public String paymentId;
    public ProxyGetPaymentTransactionLog withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestString")
    public String requestString;
    public ProxyGetPaymentTransactionLog withRequestString(String requestString) {
        this.requestString = requestString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseString")
    public String responseString;
    public ProxyGetPaymentTransactionLog withResponseString(String responseString) {
        this.responseString = responseString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransactionDate")
    public OffsetDateTime transactionDate;
    public ProxyGetPaymentTransactionLog withTransactionDate(OffsetDateTime transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionId")
    public String transactionId;
    public ProxyGetPaymentTransactionLog withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}