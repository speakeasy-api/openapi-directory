package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobStatusAndResponse200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String errors;
    public GetJobStatusAndResponse200ApplicationJson withErrors(String errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public openapisdk.models.shared.JobResult result;
    public GetJobStatusAndResponse200ApplicationJson withResult(openapisdk.models.shared.JobResult result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetJobStatusAndResponse200ApplicationJsonStatusEnum status;
    public GetJobStatusAndResponse200ApplicationJson withStatus(GetJobStatusAndResponse200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetJobStatusAndResponse200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}