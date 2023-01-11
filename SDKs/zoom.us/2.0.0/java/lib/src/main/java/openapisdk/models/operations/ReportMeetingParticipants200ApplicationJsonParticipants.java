package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportMeetingParticipants200ApplicationJsonParticipants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_key")
    public String customerKey;
    public ReportMeetingParticipants200ApplicationJsonParticipants withCustomerKey(String customerKey) {
        this.customerKey = customerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public ReportMeetingParticipants200ApplicationJsonParticipants withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failover")
    public Boolean failover;
    public ReportMeetingParticipants200ApplicationJsonParticipants withFailover(Boolean failover) {
        this.failover = failover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ReportMeetingParticipants200ApplicationJsonParticipants withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("join_time")
    public OffsetDateTime joinTime;
    public ReportMeetingParticipants200ApplicationJsonParticipants withJoinTime(OffsetDateTime joinTime) {
        this.joinTime = joinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("leave_time")
    public OffsetDateTime leaveTime;
    public ReportMeetingParticipants200ApplicationJsonParticipants withLeaveTime(OffsetDateTime leaveTime) {
        this.leaveTime = leaveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReportMeetingParticipants200ApplicationJsonParticipants withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrant_id")
    public String registrantId;
    public ReportMeetingParticipants200ApplicationJsonParticipants withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_email")
    public String userEmail;
    public ReportMeetingParticipants200ApplicationJsonParticipants withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public ReportMeetingParticipants200ApplicationJsonParticipants withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}