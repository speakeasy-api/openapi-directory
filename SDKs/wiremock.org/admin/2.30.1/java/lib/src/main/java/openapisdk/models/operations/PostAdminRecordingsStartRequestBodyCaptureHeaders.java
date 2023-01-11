package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsStartRequestBodyCaptureHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseInsensitive")
    public Boolean caseInsensitive;
    public PostAdminRecordingsStartRequestBodyCaptureHeaders withCaseInsensitive(Boolean caseInsensitive) {
        this.caseInsensitive = caseInsensitive;
        return this;
    }
}