package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserRecordings200ApplicationJsonRecordings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_name")
    public String calleeName;
    public PhoneUserRecordings200ApplicationJsonRecordings withCalleeName(String calleeName) {
        this.calleeName = calleeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number")
    public String calleeNumber;
    public PhoneUserRecordings200ApplicationJsonRecordings withCalleeNumber(String calleeNumber) {
        this.calleeNumber = calleeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number_type")
    public String calleeNumberType;
    public PhoneUserRecordings200ApplicationJsonRecordings withCalleeNumberType(String calleeNumberType) {
        this.calleeNumberType = calleeNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public PhoneUserRecordings200ApplicationJsonRecordings withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number")
    public String callerNumber;
    public PhoneUserRecordings200ApplicationJsonRecordings withCallerNumber(String callerNumber) {
        this.callerNumber = callerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number_type")
    public String callerNumberType;
    public PhoneUserRecordings200ApplicationJsonRecordings withCallerNumberType(String callerNumberType) {
        this.callerNumberType = callerNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public PhoneUserRecordings200ApplicationJsonRecordings withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public PhoneUserRecordings200ApplicationJsonRecordings withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public PhoneUserRecordings200ApplicationJsonRecordings withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public PhoneUserRecordings200ApplicationJsonRecordings withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PhoneUserRecordings200ApplicationJsonRecordings withId(String id) {
        this.id = id;
        return this;
    }
}