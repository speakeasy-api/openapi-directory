package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuoteDocResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public String file;
    public PostQuoteDocResponseType withFile(String file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostQuoteDocResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}