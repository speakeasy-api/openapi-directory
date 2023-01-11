package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrderPreviewResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewResult")
    public PreviewResult previewResult;
    public PostOrderPreviewResponseType withPreviewResult(PreviewResult previewResult) {
        this.previewResult = previewResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processId")
    public String processId;
    public PostOrderPreviewResponseType withProcessId(String processId) {
        this.processId = processId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public PostOrderPreviewResponseTypeReasons[] reasons;
    public PostOrderPreviewResponseType withReasons(PostOrderPreviewResponseTypeReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostOrderPreviewResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}