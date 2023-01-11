package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FieldOperation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public FieldOperationFieldEnum field;
    public FieldOperation withField(FieldOperationFieldEnum field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public FieldOperationOperationEnum operation;
    public FieldOperation withOperation(FieldOperationOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public FieldOperation withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}