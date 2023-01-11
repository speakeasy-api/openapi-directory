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
 * DataQueryJobCancelled
 * A cancelled data query job.
 * 
**/
public class DataQueryJobCancelled {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public DataQueryJobCancelled withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DataQueryJobCancelled withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public DataQueryJobCancelled withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryStatus")
    public DataQueryJobCancelledQueryStatusEnum queryStatus;
    public DataQueryJobCancelled withQueryStatus(DataQueryJobCancelledQueryStatusEnum queryStatus) {
        this.queryStatus = queryStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingRetries")
    public Long remainingRetries;
    public DataQueryJobCancelled withRemainingRetries(Long remainingRetries) {
        this.remainingRetries = remainingRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedOn")
    public OffsetDateTime updatedOn;
    public DataQueryJobCancelled withUpdatedOn(OffsetDateTime updatedOn) {
        this.updatedOn = updatedOn;
        return this;
    }
}