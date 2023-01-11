package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomObjectBulkDeleteFilterCondition
 * Condition evaluated on a single object field
**/
public class CustomObjectBulkDeleteFilterCondition {
    @JsonProperty("field")
    public String field;
    public CustomObjectBulkDeleteFilterCondition withField(String field) {
        this.field = field;
        return this;
    }
    @JsonProperty("operator")
    public CustomObjectBulkDeleteFilterConditionOperatorEnum operator;
    public CustomObjectBulkDeleteFilterCondition withOperator(CustomObjectBulkDeleteFilterConditionOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("value")
    public Object value;
    public CustomObjectBulkDeleteFilterCondition withValue(Object value) {
        this.value = value;
        return this;
    }
}