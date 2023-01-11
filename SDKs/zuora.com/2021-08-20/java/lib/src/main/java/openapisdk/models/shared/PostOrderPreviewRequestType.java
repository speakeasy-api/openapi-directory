package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderPreviewRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PostOrderPreviewRequestType withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostOrderPreviewRequestType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existingAccountNumber")
    public String existingAccountNumber;
    public PostOrderPreviewRequestType withExistingAccountNumber(String existingAccountNumber) {
        this.existingAccountNumber = existingAccountNumber;
        return this;
    }
    @JsonProperty("orderDate")
    public LocalDate orderDate;
    public PostOrderPreviewRequestType withOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public OrderLineItemCommonPostOrder[] orderLineItems;
    public PostOrderPreviewRequestType withOrderLineItems(OrderLineItemCommonPostOrder[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public String orderNumber;
    public PostOrderPreviewRequestType withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewAccountInfo")
    public PreviewAccountInfo previewAccountInfo;
    public PostOrderPreviewRequestType withPreviewAccountInfo(PreviewAccountInfo previewAccountInfo) {
        this.previewAccountInfo = previewAccountInfo;
        return this;
    }
    @JsonProperty("previewOptions")
    public PreviewOptions previewOptions;
    public PostOrderPreviewRequestType withPreviewOptions(PreviewOptions previewOptions) {
        this.previewOptions = previewOptions;
        return this;
    }
    @JsonProperty("subscriptions")
    public PostOrderPreviewRequestTypeSubscriptions[] subscriptions;
    public PostOrderPreviewRequestType withSubscriptions(PostOrderPreviewRequestTypeSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}