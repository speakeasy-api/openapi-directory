package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DashboardMeetings200ApplicationJsonMetrics
 * Meeting metric details.
**/
public class DashboardMeetings200ApplicationJsonMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public DashboardMeetings200ApplicationJsonMetricsCustomKeys[] customKeys;
    public DashboardMeetings200ApplicationJsonMetrics withCustomKeys(DashboardMeetings200ApplicationJsonMetricsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public DashboardMeetings200ApplicationJsonMetrics withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public DashboardMeetings200ApplicationJsonMetrics withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardMeetings200ApplicationJsonMetrics withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public DashboardMeetings200ApplicationJsonMetrics withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_3rd_party_audio")
    public Boolean has3rdPartyAudio;
    public DashboardMeetings200ApplicationJsonMetrics withHas3rdPartyAudio(Boolean has3rdPartyAudio) {
        this.has3rdPartyAudio = has3rdPartyAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_pstn")
    public Boolean hasPstn;
    public DashboardMeetings200ApplicationJsonMetrics withHasPstn(Boolean hasPstn) {
        this.hasPstn = hasPstn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_recording")
    public Boolean hasRecording;
    public DashboardMeetings200ApplicationJsonMetrics withHasRecording(Boolean hasRecording) {
        this.hasRecording = hasRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_screen_share")
    public Boolean hasScreenShare;
    public DashboardMeetings200ApplicationJsonMetrics withHasScreenShare(Boolean hasScreenShare) {
        this.hasScreenShare = hasScreenShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_sip")
    public Boolean hasSip;
    public DashboardMeetings200ApplicationJsonMetrics withHasSip(Boolean hasSip) {
        this.hasSip = hasSip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_video")
    public Boolean hasVideo;
    public DashboardMeetings200ApplicationJsonMetrics withHasVideo(Boolean hasVideo) {
        this.hasVideo = hasVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_voip")
    public Boolean hasVoip;
    public DashboardMeetings200ApplicationJsonMetrics withHasVoip(Boolean hasVoip) {
        this.hasVoip = hasVoip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public DashboardMeetings200ApplicationJsonMetrics withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DashboardMeetings200ApplicationJsonMetrics withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_room_participants")
    public Long inRoomParticipants;
    public DashboardMeetings200ApplicationJsonMetrics withInRoomParticipants(Long inRoomParticipants) {
        this.inRoomParticipants = inRoomParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public Long participants;
    public DashboardMeetings200ApplicationJsonMetrics withParticipants(Long participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public DashboardMeetings200ApplicationJsonMetrics withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public DashboardMeetings200ApplicationJsonMetrics withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public DashboardMeetings200ApplicationJsonMetricsTrackingFields[] trackingFields;
    public DashboardMeetings200ApplicationJsonMetrics withTrackingFields(DashboardMeetings200ApplicationJsonMetricsTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_type")
    public String userType;
    public DashboardMeetings200ApplicationJsonMetrics withUserType(String userType) {
        this.userType = userType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public DashboardMeetings200ApplicationJsonMetrics withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}