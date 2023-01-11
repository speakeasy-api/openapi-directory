package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Order
 * Represents the order information that will be returned in the GET call.
**/
public class Order {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public Order withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public Order withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Order withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public Order withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Order withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingAccountNumber")
    public String existingAccountNumber;
    public Order withExistingAccountNumber(String existingAccountNumber) {
        this.existingAccountNumber = existingAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderDate")
    public LocalDate orderDate;
    public Order withOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public OrderLineItemRetrieveOrder[] orderLineItems;
    public Order withOrderLineItems(OrderLineItemRetrieveOrder[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public Order withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderStatusEnum status;
    public Order withStatus(OrderStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public OrderSubscriptions[] subscriptions;
    public Order withSubscriptions(OrderSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public Order withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedDate")
    public String updatedDate;
    public Order withUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}