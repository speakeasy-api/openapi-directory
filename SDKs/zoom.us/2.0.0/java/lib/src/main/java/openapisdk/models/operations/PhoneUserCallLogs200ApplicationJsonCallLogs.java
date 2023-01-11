package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserCallLogs200ApplicationJsonCallLogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accepted_by")
    public PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy acceptedBy;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withAcceptedBy(PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy acceptedBy) {
        this.acceptedBy = acceptedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_name")
    public String calleeName;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCalleeName(String calleeName) {
        this.calleeName = calleeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number")
    public String calleeNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCalleeNumber(String calleeNumber) {
        this.calleeNumber = calleeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number_type")
    public String calleeNumberType;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCalleeNumberType(String calleeNumberType) {
        this.calleeNumberType = calleeNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number")
    public String callerNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCallerNumber(String callerNumber) {
        this.callerNumber = callerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number_type")
    public String callerNumberType;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCallerNumberType(String callerNumberType) {
        this.callerNumberType = callerNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge")
    public String charge;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withCharge(String charge) {
        this.charge = charge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_code")
    public String clientCode;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withClientCode(String clientCode) {
        this.clientCode = clientCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwarded_by")
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy forwardedBy;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withForwardedBy(PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy forwardedBy) {
        this.forwardedBy = forwardedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwarded_to")
    public PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo forwardedTo;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withForwardedTo(PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo forwardedTo) {
        this.forwardedTo = forwardedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_recording")
    public Boolean hasRecording;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withHasRecording(Boolean hasRecording) {
        this.hasRecording = hasRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_voicemail")
    public Boolean hasVoicemail;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withHasVoicemail(Boolean hasVoicemail) {
        this.hasVoicemail = hasVoicemail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outgoing_by")
    public PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy outgoingBy;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withOutgoingBy(PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy outgoingBy) {
        this.outgoingBy = outgoingBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public String rate;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public String recordingType;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withRecordingType(String recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public PhoneUserCallLogs200ApplicationJsonCallLogsSite site;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withSite(PhoneUserCallLogs200ApplicationJsonCallLogsSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_time")
    public Long waitingTime;
    public PhoneUserCallLogs200ApplicationJsonCallLogs withWaitingTime(Long waitingTime) {
        this.waitingTime = waitingTime;
        return this;
    }
}