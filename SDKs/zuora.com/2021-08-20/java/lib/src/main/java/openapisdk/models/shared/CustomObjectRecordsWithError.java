package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectRecordsWithError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CustomObjectRecordsWithError withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CustomObjectRecordsWithError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record")
    public java.util.Map<String, Object> record;
    public CustomObjectRecordsWithError withRecord(java.util.Map<String, Object> record) {
        this.record = record;
        return this;
    }
}