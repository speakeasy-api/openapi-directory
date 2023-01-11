package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectBulkJobErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CustomObjectBulkJobErrorResponse withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CustomObjectBulkJobErrorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record")
    public java.util.Map<String, Object> record;
    public CustomObjectBulkJobErrorResponse withRecord(java.util.Map<String, Object> record) {
        this.record = record;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row")
    public Long row;
    public CustomObjectBulkJobErrorResponse withRow(Long row) {
        this.row = row;
        return this;
    }
}