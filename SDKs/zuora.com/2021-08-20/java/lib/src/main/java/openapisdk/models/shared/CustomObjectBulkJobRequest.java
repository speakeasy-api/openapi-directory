package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectBulkJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public CustomObjectBulkDeleteFilter filter;
    public CustomObjectBulkJobRequest withFilter(CustomObjectBulkDeleteFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonProperty("namespace")
    public CustomObjectBulkJobRequestNamespaceEnum namespace;
    public CustomObjectBulkJobRequest withNamespace(CustomObjectBulkJobRequestNamespaceEnum namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public CustomObjectBulkJobRequest withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonProperty("operation")
    public CustomObjectBulkJobRequestOperationEnum operation;
    public CustomObjectBulkJobRequest withOperation(CustomObjectBulkJobRequestOperationEnum operation) {
        this.operation = operation;
        return this;
    }
}