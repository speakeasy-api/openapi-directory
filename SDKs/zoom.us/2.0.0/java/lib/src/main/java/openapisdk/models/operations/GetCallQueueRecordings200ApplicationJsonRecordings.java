package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallQueueRecordings200ApplicationJsonRecordings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_name")
    public String calleeName;
    public GetCallQueueRecordings200ApplicationJsonRecordings withCalleeName(String calleeName) {
        this.calleeName = calleeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number")
    public String calleeNumber;
    public GetCallQueueRecordings200ApplicationJsonRecordings withCalleeNumber(String calleeNumber) {
        this.calleeNumber = calleeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number_type")
    public String calleeNumberType;
    public GetCallQueueRecordings200ApplicationJsonRecordings withCalleeNumberType(String calleeNumberType) {
        this.calleeNumberType = calleeNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public GetCallQueueRecordings200ApplicationJsonRecordings withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number")
    public String callerNumber;
    public GetCallQueueRecordings200ApplicationJsonRecordings withCallerNumber(String callerNumber) {
        this.callerNumber = callerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number_type")
    public String callerNumberType;
    public GetCallQueueRecordings200ApplicationJsonRecordings withCallerNumberType(String callerNumberType) {
        this.callerNumberType = callerNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public LocalDate dateTime;
    public GetCallQueueRecordings200ApplicationJsonRecordings withDateTime(LocalDate dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public GetCallQueueRecordings200ApplicationJsonRecordings withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public GetCallQueueRecordings200ApplicationJsonRecordings withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public GetCallQueueRecordings200ApplicationJsonRecordings withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetCallQueueRecordings200ApplicationJsonRecordings withId(String id) {
        this.id = id;
        return this;
    }
}