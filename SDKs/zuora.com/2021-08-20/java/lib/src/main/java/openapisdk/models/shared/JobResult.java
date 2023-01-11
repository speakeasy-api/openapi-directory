package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobResult
 * **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
 * 
 * The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order". 
 * 
**/
public class JobResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public JobResult withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public JobResult withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoIds")
    public String[] creditMemoIds;
    public JobResult withCreditMemoIds(String[] creditMemoIds) {
        this.creditMemoIds = creditMemoIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoNumbers")
    public String[] creditMemoNumbers;
    public JobResult withCreditMemoNumbers(String[] creditMemoNumbers) {
        this.creditMemoNumbers = creditMemoNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public JobResult withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceNumbers")
    public String[] invoiceNumbers;
    public JobResult withInvoiceNumbers(String[] invoiceNumbers) {
        this.invoiceNumbers = invoiceNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public JobResult withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public JobResultOrderLineItems[] orderLineItems;
    public JobResult withOrderLineItems(JobResultOrderLineItems[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public JobResult withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidAmount")
    public String paidAmount;
    public JobResult withPaidAmount(String paidAmount) {
        this.paidAmount = paidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public JobResult withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentNumber")
    public String paymentNumber;
    public JobResult withPaymentNumber(String paymentNumber) {
        this.paymentNumber = paymentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public JobResult withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramps")
    public JobResultRamps[] ramps;
    public JobResult withRamps(JobResultRamps[] ramps) {
        this.ramps = ramps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public JobResultReasons[] reasons;
    public JobResult withReasons(JobResultReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobResultStatusEnum status;
    public JobResult withStatus(JobResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionIds")
    public String[] subscriptionIds;
    public JobResult withSubscriptionIds(String[] subscriptionIds) {
        this.subscriptionIds = subscriptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionNumbers")
    public String[] subscriptionNumbers;
    public JobResult withSubscriptionNumbers(String[] subscriptionNumbers) {
        this.subscriptionNumbers = subscriptionNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public JobResultSubscriptions[] subscriptions;
    public JobResult withSubscriptions(JobResultSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public JobResult withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}