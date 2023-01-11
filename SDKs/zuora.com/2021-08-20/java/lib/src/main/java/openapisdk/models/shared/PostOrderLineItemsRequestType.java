package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderLineItemsRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderLineItems")
    public PostOrderLineItemUpdateType[] orderLineItems;
    public PostOrderLineItemsRequestType withOrderLineItems(PostOrderLineItemUpdateType[] orderLineItems) {
        this.orderLineItems = orderLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingOptions")
    public ProcessingOptions processingOptions;
    public PostOrderLineItemsRequestType withProcessingOptions(ProcessingOptions processingOptions) {
        this.processingOptions = processingOptions;
        return this;
    }
}