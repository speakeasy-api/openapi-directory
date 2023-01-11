package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetMassUpdateType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public String actionType;
    public GetMassUpdateType withActionType(String actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endedOn")
    public OffsetDateTime endedOn;
    public GetMassUpdateType withEndedOn(OffsetDateTime endedOn) {
        this.endedOn = endedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCount")
    public String errorCount;
    public GetMassUpdateType withErrorCount(String errorCount) {
        this.errorCount = errorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputSize")
    public Long inputSize;
    public GetMassUpdateType withInputSize(Long inputSize) {
        this.inputSize = inputSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputSize")
    public Long outputSize;
    public GetMassUpdateType withOutputSize(Long outputSize) {
        this.outputSize = outputSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputType")
    public String outputType;
    public GetMassUpdateType withOutputType(String outputType) {
        this.outputType = outputType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputURL")
    public String outputURL;
    public GetMassUpdateType withOutputUrl(String outputURL) {
        this.outputURL = outputURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processedCount")
    public String processedCount;
    public GetMassUpdateType withProcessedCount(String processedCount) {
        this.processedCount = processedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedOn")
    public OffsetDateTime startedOn;
    public GetMassUpdateType withStartedOn(OffsetDateTime startedOn) {
        this.startedOn = startedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetMassUpdateType withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetMassUpdateType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successCount")
    public String successCount;
    public GetMassUpdateType withSuccessCount(String successCount) {
        this.successCount = successCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public String totalCount;
    public GetMassUpdateType withTotalCount(String totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadedBy")
    public String uploadedBy;
    public GetMassUpdateType withUploadedBy(String uploadedBy) {
        this.uploadedBy = uploadedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("uploadedOn")
    public OffsetDateTime uploadedOn;
    public GetMassUpdateType withUploadedOn(OffsetDateTime uploadedOn) {
        this.uploadedOn = uploadedOn;
        return this;
    }
}