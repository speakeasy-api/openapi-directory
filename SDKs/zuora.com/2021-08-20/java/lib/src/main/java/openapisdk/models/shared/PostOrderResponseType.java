package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PostOrderResponseType withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PostOrderResponseType withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoIds")
    public String[] creditMemoIds;
    public PostOrderResponseType withCreditMemoIds(String[] creditMemoIds) {
        this.creditMemoIds = creditMemoIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoNumbers")
    public String[] creditMemoNumbers;
    public PostOrderResponseType withCreditMemoNumbers(String[] creditMemoNumbers) {
        this.creditMemoNumbers = creditMemoNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceIds")
    public String[] invoiceIds;
    public PostOrderResponseType withInvoiceIds(String[] invoiceIds) {
        this.invoiceIds = invoiceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceNumbers")
    public String[] invoiceNumbers;
    public PostOrderResponseType withInvoiceNumbers(String[] invoiceNumbers) {
        this.invoiceNumbers = invoiceNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public PostOrderResponseType withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public PostOrderResponseTypeOrderLineItems[] orderLineItems;
    public PostOrderResponseType withOrderLineItems(PostOrderResponseTypeOrderLineItems[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public PostOrderResponseType withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidAmount")
    public String paidAmount;
    public PostOrderResponseType withPaidAmount(String paidAmount) {
        this.paidAmount = paidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostOrderResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentNumber")
    public String paymentNumber;
    public PostOrderResponseType withPaymentNumber(String paymentNumber) {
        this.paymentNumber = paymentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public PostOrderResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramps")
    public PostOrderResponseTypeRamps[] ramps;
    public PostOrderResponseType withRamps(PostOrderResponseTypeRamps[] ramps) {
        this.ramps = ramps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public PostOrderResponseTypeReasons[] reasons;
    public PostOrderResponseType withReasons(PostOrderResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PostOrderResponseTypeStatusEnum status;
    public PostOrderResponseType withStatus(PostOrderResponseTypeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionIds")
    public String[] subscriptionIds;
    public PostOrderResponseType withSubscriptionIds(String[] subscriptionIds) {
        this.subscriptionIds = subscriptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumbers")
    public String[] subscriptionNumbers;
    public PostOrderResponseType withSubscriptionNumbers(String[] subscriptionNumbers) {
        this.subscriptionNumbers = subscriptionNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public PostOrderResponseTypeSubscriptions[] subscriptions;
    public PostOrderResponseType withSubscriptions(PostOrderResponseTypeSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostOrderResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}