package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPhoneRecordings200ApplicationJsonRecordings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_name")
    public String calleeName;
    public GetPhoneRecordings200ApplicationJsonRecordings withCalleeName(String calleeName) {
        this.calleeName = calleeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number")
    public String calleeNumber;
    public GetPhoneRecordings200ApplicationJsonRecordings withCalleeNumber(String calleeNumber) {
        this.calleeNumber = calleeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number_type")
    public GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum calleeNumberType;
    public GetPhoneRecordings200ApplicationJsonRecordings withCalleeNumberType(GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum calleeNumberType) {
        this.calleeNumberType = calleeNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public GetPhoneRecordings200ApplicationJsonRecordings withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number")
    public String callerNumber;
    public GetPhoneRecordings200ApplicationJsonRecordings withCallerNumber(String callerNumber) {
        this.callerNumber = callerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number_type")
    public GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum callerNumberType;
    public GetPhoneRecordings200ApplicationJsonRecordings withCallerNumberType(GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum callerNumberType) {
        this.callerNumberType = callerNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public GetPhoneRecordings200ApplicationJsonRecordings withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum direction;
    public GetPhoneRecordings200ApplicationJsonRecordings withDirection(GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public GetPhoneRecordings200ApplicationJsonRecordings withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public GetPhoneRecordings200ApplicationJsonRecordings withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPhoneRecordings200ApplicationJsonRecordings withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public GetPhoneRecordings200ApplicationJsonRecordingsOwner owner;
    public GetPhoneRecordings200ApplicationJsonRecordings withOwner(GetPhoneRecordings200ApplicationJsonRecordingsOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public String recordingType;
    public GetPhoneRecordings200ApplicationJsonRecordings withRecordingType(String recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public GetPhoneRecordings200ApplicationJsonRecordingsSite site;
    public GetPhoneRecordings200ApplicationJsonRecordings withSite(GetPhoneRecordings200ApplicationJsonRecordingsSite site) {
        this.site = site;
        return this;
    }
}