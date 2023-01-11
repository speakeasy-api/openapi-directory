package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DataQueryJob
 * A data query job.
 * 
**/
public class DataQueryJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public DataQueryJob withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFile")
    public String dataFile;
    public DataQueryJob withDataFile(String dataFile) {
        this.dataFile = dataFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DataQueryJob withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputRows")
    public Long outputRows;
    public DataQueryJob withOutputRows(Long outputRows) {
        this.outputRows = outputRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingTime")
    public Long processingTime;
    public DataQueryJob withProcessingTime(Long processingTime) {
        this.processingTime = processingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public DataQueryJob withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryStatus")
    public DataQueryJobQueryStatusEnum queryStatus;
    public DataQueryJob withQueryStatus(DataQueryJobQueryStatusEnum queryStatus) {
        this.queryStatus = queryStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingRetries")
    public Long remainingRetries;
    public DataQueryJob withRemainingRetries(Long remainingRetries) {
        this.remainingRetries = remainingRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedOn")
    public OffsetDateTime updatedOn;
    public DataQueryJob withUpdatedOn(OffsetDateTime updatedOn) {
        this.updatedOn = updatedOn;
        return this;
    }
}