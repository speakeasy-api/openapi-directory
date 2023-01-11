package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderForEvergreen
 * Represents the order information that will be returned in the GET call.
**/
public class OrderForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public OrderForEvergreen withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public OrderForEvergreen withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public OrderForEvergreen withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public OrderForEvergreen withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderForEvergreen withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingAccountNumber")
    public String existingAccountNumber;
    public OrderForEvergreen withExistingAccountNumber(String existingAccountNumber) {
        this.existingAccountNumber = existingAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderDate")
    public String orderDate;
    public OrderForEvergreen withOrderDate(String orderDate) {
        this.orderDate = orderDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public OrderForEvergreen withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public OrderForEvergreen withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public OrderForEvergreenSubscriptions[] subscriptions;
    public OrderForEvergreen withSubscriptions(OrderForEvergreenSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public OrderForEvergreen withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedDate")
    public String updatedDate;
    public OrderForEvergreen withUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}