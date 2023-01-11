package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserVoiceMails200ApplicationJsonVoiceMails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_name")
    public String calleeName;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withCalleeName(String calleeName) {
        this.calleeName = calleeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number")
    public String calleeNumber;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withCalleeNumber(String calleeNumber) {
        this.calleeNumber = calleeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callee_number_type")
    public String calleeNumberType;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withCalleeNumberType(String calleeNumberType) {
        this.calleeNumberType = calleeNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_name")
    public String callerName;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withCallerName(String callerName) {
        this.callerName = callerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number")
    public String callerNumber;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withCallerNumber(String callerNumber) {
        this.callerNumber = callerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caller_number_type")
    public String callerNumberType;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withCallerNumberType(String callerNumberType) {
        this.callerNumberType = callerNumberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_time")
    public String dateTime;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum status;
    public PhoneUserVoiceMails200ApplicationJsonVoiceMails withStatus(PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum status) {
        this.status = status;
        return this;
    }
}