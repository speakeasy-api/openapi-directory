package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomObjectBulkDeleteFilter
 * Filters to determine which records to be deleted in the bulk delete operation.
**/
public class CustomObjectBulkDeleteFilter {
    @JsonProperty("conditions")
    public CustomObjectBulkDeleteFilterCondition[] conditions;
    public CustomObjectBulkDeleteFilter withConditions(CustomObjectBulkDeleteFilterCondition[] conditions) {
        this.conditions = conditions;
        return this;
    }
}