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
 * DashboardMeetingDetailMeetingMetrics
 * Meeting metric details.
**/
public class DashboardMeetingDetailMeetingMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public DashboardMeetingDetailMeetingMetricsCustomKeys[] customKeys;
    public DashboardMeetingDetailMeetingMetrics withCustomKeys(DashboardMeetingDetailMeetingMetricsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public DashboardMeetingDetailMeetingMetrics withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public DashboardMeetingDetailMeetingMetrics withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardMeetingDetailMeetingMetrics withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public DashboardMeetingDetailMeetingMetrics withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_3rd_party_audio")
    public Boolean has3rdPartyAudio;
    public DashboardMeetingDetailMeetingMetrics withHas3rdPartyAudio(Boolean has3rdPartyAudio) {
        this.has3rdPartyAudio = has3rdPartyAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_pstn")
    public Boolean hasPstn;
    public DashboardMeetingDetailMeetingMetrics withHasPstn(Boolean hasPstn) {
        this.hasPstn = hasPstn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_recording")
    public Boolean hasRecording;
    public DashboardMeetingDetailMeetingMetrics withHasRecording(Boolean hasRecording) {
        this.hasRecording = hasRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_screen_share")
    public Boolean hasScreenShare;
    public DashboardMeetingDetailMeetingMetrics withHasScreenShare(Boolean hasScreenShare) {
        this.hasScreenShare = hasScreenShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_sip")
    public Boolean hasSip;
    public DashboardMeetingDetailMeetingMetrics withHasSip(Boolean hasSip) {
        this.hasSip = hasSip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_video")
    public Boolean hasVideo;
    public DashboardMeetingDetailMeetingMetrics withHasVideo(Boolean hasVideo) {
        this.hasVideo = hasVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_voip")
    public Boolean hasVoip;
    public DashboardMeetingDetailMeetingMetrics withHasVoip(Boolean hasVoip) {
        this.hasVoip = hasVoip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public DashboardMeetingDetailMeetingMetrics withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DashboardMeetingDetailMeetingMetrics withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_room_participants")
    public Long inRoomParticipants;
    public DashboardMeetingDetailMeetingMetrics withInRoomParticipants(Long inRoomParticipants) {
        this.inRoomParticipants = inRoomParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public Long participants;
    public DashboardMeetingDetailMeetingMetrics withParticipants(Long participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public DashboardMeetingDetailMeetingMetrics withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public DashboardMeetingDetailMeetingMetrics withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_type")
    public String userType;
    public DashboardMeetingDetailMeetingMetrics withUserType(String userType) {
        this.userType = userType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public DashboardMeetingDetailMeetingMetrics withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}