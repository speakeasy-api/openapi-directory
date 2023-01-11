package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PostOrderRequestType withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostOrderRequestType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingAccountNumber")
    public String existingAccountNumber;
    public PostOrderRequestType withExistingAccountNumber(String existingAccountNumber) {
        this.existingAccountNumber = existingAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newAccount")
    public java.util.Map<String, String> newAccount;
    public PostOrderRequestType withNewAccount(java.util.Map<String, String> newAccount) {
        this.newAccount = newAccount;
        return this;
    }
    @JsonProperty("orderDate")
    public LocalDate orderDate;
    public PostOrderRequestType withOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public OrderLineItemCommonPostOrder[] orderLineItems;
    public PostOrderRequestType withOrderLineItems(OrderLineItemCommonPostOrder[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public PostOrderRequestType withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingOptions")
    public ProcessingOptions processingOptions;
    public PostOrderRequestType withProcessingOptions(ProcessingOptions processingOptions) {
        this.processingOptions = processingOptions;
        return this;
    }
    @JsonProperty("subscriptions")
    public PostOrderRequestTypeSubscriptions[] subscriptions;
    public PostOrderRequestType withSubscriptions(PostOrderRequestTypeSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}