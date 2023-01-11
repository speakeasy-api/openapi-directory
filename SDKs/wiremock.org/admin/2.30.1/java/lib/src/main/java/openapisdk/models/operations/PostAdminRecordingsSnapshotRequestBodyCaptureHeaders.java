package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsSnapshotRequestBodyCaptureHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseInsensitive")
    public Boolean caseInsensitive;
    public PostAdminRecordingsSnapshotRequestBodyCaptureHeaders withCaseInsensitive(Boolean caseInsensitive) {
        this.caseInsensitive = caseInsensitive;
        return this;
    }
}