package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportTelephone200ApplicationJsonTelephonyUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_in_number")
    public String callInNumber;
    public ReportTelephone200ApplicationJsonTelephonyUsage withCallInNumber(String callInNumber) {
        this.callInNumber = callInNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public ReportTelephone200ApplicationJsonTelephonyUsage withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public ReportTelephone200ApplicationJsonTelephonyUsage withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public ReportTelephone200ApplicationJsonTelephonyUsage withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public ReportTelephone200ApplicationJsonTelephonyUsage withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_email")
    public String hostEmail;
    public ReportTelephone200ApplicationJsonTelephonyUsage withHostEmail(String hostEmail) {
        this.hostEmail = hostEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public ReportTelephone200ApplicationJsonTelephonyUsage withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_name")
    public String hostName;
    public ReportTelephone200ApplicationJsonTelephonyUsage withHostName(String hostName) {
        this.hostName = hostName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_id")
    public Long meetingId;
    public ReportTelephone200ApplicationJsonTelephonyUsage withMeetingId(Long meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_type")
    public String meetingType;
    public ReportTelephone200ApplicationJsonTelephonyUsage withMeetingType(String meetingType) {
        this.meetingType = meetingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ReportTelephone200ApplicationJsonTelephonyUsage withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public ReportTelephone200ApplicationJsonTelephonyUsage withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signaled_number")
    public String signaledNumber;
    public ReportTelephone200ApplicationJsonTelephonyUsage withSignaledNumber(String signaledNumber) {
        this.signaledNumber = signaledNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public ReportTelephone200ApplicationJsonTelephonyUsage withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public ReportTelephone200ApplicationJsonTelephonyUsage withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum type;
    public ReportTelephone200ApplicationJsonTelephonyUsage withType(ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public ReportTelephone200ApplicationJsonTelephonyUsage withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}