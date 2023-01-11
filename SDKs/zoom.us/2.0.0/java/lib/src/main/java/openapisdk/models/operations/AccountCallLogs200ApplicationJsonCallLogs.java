package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AccountCallLogs200ApplicationJsonCallLogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("answer_start_time")
    public OffsetDateTime answerStartTime;
    public AccountCallLogs200ApplicationJsonCallLogs withAnswerStartTime(OffsetDateTime answerStartTime) {
        this.answerStartTime = answerStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public AccountCallLogs200ApplicationJsonCallLogs withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_type")
    public AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum callType;
    public AccountCallLogs200ApplicationJsonCallLogs withCallType(AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum callType) {
        this.callType = callType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_name")
    public String calleeName;
    public AccountCallLogs200ApplicationJsonCallLogs withCalleeName(String calleeName) {
        this.calleeName = calleeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number")
    public String calleeNumber;
    public AccountCallLogs200ApplicationJsonCallLogs withCalleeNumber(String calleeNumber) {
        this.calleeNumber = calleeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number_type")
    public String calleeNumberType;
    public AccountCallLogs200ApplicationJsonCallLogs withCalleeNumberType(String calleeNumberType) {
        this.calleeNumberType = calleeNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public AccountCallLogs200ApplicationJsonCallLogs withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number")
    public String callerNumber;
    public AccountCallLogs200ApplicationJsonCallLogs withCallerNumber(String callerNumber) {
        this.callerNumber = callerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number_type")
    public String callerNumberType;
    public AccountCallLogs200ApplicationJsonCallLogs withCallerNumberType(String callerNumberType) {
        this.callerNumberType = callerNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge")
    public String charge;
    public AccountCallLogs200ApplicationJsonCallLogs withCharge(String charge) {
        this.charge = charge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_code")
    public String clientCode;
    public AccountCallLogs200ApplicationJsonCallLogs withClientCode(String clientCode) {
        this.clientCode = clientCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public AccountCallLogs200ApplicationJsonCallLogs withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public AccountCallLogs200ApplicationJsonCallLogs withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public AccountCallLogs200ApplicationJsonCallLogs withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountCallLogs200ApplicationJsonCallLogs withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public AccountCallLogs200ApplicationJsonCallLogsOwner owner;
    public AccountCallLogs200ApplicationJsonCallLogs withOwner(AccountCallLogs200ApplicationJsonCallLogsOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public AccountCallLogs200ApplicationJsonCallLogs withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public String rate;
    public AccountCallLogs200ApplicationJsonCallLogs withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_id")
    public String recordingId;
    public AccountCallLogs200ApplicationJsonCallLogs withRecordingId(String recordingId) {
        this.recordingId = recordingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum recordingType;
    public AccountCallLogs200ApplicationJsonCallLogs withRecordingType(AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public AccountCallLogs200ApplicationJsonCallLogs withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public AccountCallLogs200ApplicationJsonCallLogsSite site;
    public AccountCallLogs200ApplicationJsonCallLogs withSite(AccountCallLogs200ApplicationJsonCallLogsSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public AccountCallLogs200ApplicationJsonCallLogs withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_time")
    public String waitingTime;
    public AccountCallLogs200ApplicationJsonCallLogs withWaitingTime(String waitingTime) {
        this.waitingTime = waitingTime;
        return this;
    }
}