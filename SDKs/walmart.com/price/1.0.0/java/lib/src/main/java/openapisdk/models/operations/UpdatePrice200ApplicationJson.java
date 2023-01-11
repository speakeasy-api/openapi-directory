package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePrice200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public UpdatePrice200ApplicationJsonErrors[] errors;
    public UpdatePrice200ApplicationJson withErrors(UpdatePrice200ApplicationJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mart")
    public String mart;
    public UpdatePrice200ApplicationJson withMart(String mart) {
        this.mart = mart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public UpdatePrice200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public UpdatePrice200ApplicationJson withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public Integer statusCode;
    public UpdatePrice200ApplicationJson withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}