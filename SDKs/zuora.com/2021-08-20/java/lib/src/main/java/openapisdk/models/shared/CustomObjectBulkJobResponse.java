package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CustomObjectBulkJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public CustomObjectBulkJobResponse withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public CustomObjectBulkJobResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public CustomObjectBulkJobResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public CustomObjectBulkJobResponse withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public CustomObjectBulkJobResponse withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CustomObjectBulkJobResponseError error;
    public CustomObjectBulkJobResponse withError(CustomObjectBulkJobResponseError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public CustomObjectBulkJobResponseNamespaceEnum namespace;
    public CustomObjectBulkJobResponse withNamespace(CustomObjectBulkJobResponseNamespaceEnum namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public CustomObjectBulkJobResponse withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public CustomObjectBulkJobResponseOperationEnum operation;
    public CustomObjectBulkJobResponse withOperation(CustomObjectBulkJobResponseOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingTime")
    public Long processingTime;
    public CustomObjectBulkJobResponse withProcessingTime(Long processingTime) {
        this.processingTime = processingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordsProcessed")
    public Long recordsProcessed;
    public CustomObjectBulkJobResponse withRecordsProcessed(Long recordsProcessed) {
        this.recordsProcessed = recordsProcessed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CustomObjectBulkJobResponseStatusEnum status;
    public CustomObjectBulkJobResponse withStatus(CustomObjectBulkJobResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}