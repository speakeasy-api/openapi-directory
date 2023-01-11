package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BadRequestResponseErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public BadRequestResponseErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public BadRequestResponseErrors withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public BadRequestResponseErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}