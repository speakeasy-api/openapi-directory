package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPreviewOrderAsynchronously202ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public PostPreviewOrderAsynchronously202ApplicationJson withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}