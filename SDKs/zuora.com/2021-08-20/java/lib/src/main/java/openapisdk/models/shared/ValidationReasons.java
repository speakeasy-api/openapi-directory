package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidationReasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldName")
    public String fieldName;
    public ValidationReasons withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ValidationReasons withTitle(String title) {
        this.title = title;
        return this;
    }
}