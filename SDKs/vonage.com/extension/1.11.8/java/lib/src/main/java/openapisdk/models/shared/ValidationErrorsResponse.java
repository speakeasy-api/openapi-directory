package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidationErrorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public ValidationErrorsResponse withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_parameters")
    public DetailedInvalidParam[] invalidParameters;
    public ValidationErrorsResponse withInvalidParameters(DetailedInvalidParam[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Double status;
    public ValidationErrorsResponse withStatus(Double status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ValidationErrorsResponse withTitle(String title) {
        this.title = title;
        return this;
    }
}