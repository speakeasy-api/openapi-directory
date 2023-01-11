package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardMeetingParticipants200ApplicationJsonParticipants {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_quality")
    public DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum audioQuality;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withAudioQuality(DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum audioQuality) {
        this.audioQuality = audioQuality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("camera")
    public String camera;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withCamera(String camera) {
        this.camera = camera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_type")
    public String connectionType;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withConnectionType(String connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_key")
    public String customerKey;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withCustomerKey(String customerKey) {
        this.customerKey = customerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center")
    public String dataCenter;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withDataCenter(String dataCenter) {
        this.dataCenter = dataCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public String device;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withDevice(String device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("harddisk_id")
    public String harddiskId;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withHarddiskId(String harddiskId) {
        this.harddiskId = harddiskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_room_participants")
    public Long inRoomParticipants;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withInRoomParticipants(Long inRoomParticipants) {
        this.inRoomParticipants = inRoomParticipants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("join_time")
    public OffsetDateTime joinTime;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withJoinTime(OffsetDateTime joinTime) {
        this.joinTime = joinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leave_reason")
    public String leaveReason;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withLeaveReason(String leaveReason) {
        this.leaveReason = leaveReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("leave_time")
    public OffsetDateTime leaveTime;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withLeaveTime(OffsetDateTime leaveTime) {
        this.leaveTime = leaveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_addr")
    public String macAddr;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withMacAddr(String macAddr) {
        this.macAddr = macAddr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microphone")
    public String microphone;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withMicrophone(String microphone) {
        this.microphone = microphone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_type")
    public DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum networkType;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withNetworkType(DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum networkType) {
        this.networkType = networkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pc_name")
    public String pcName;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withPcName(String pcName) {
        this.pcName = pcName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public Boolean recording;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withRecording(Boolean recording) {
        this.recording = recording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrant_id")
    public String registrantId;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withRegistrantId(String registrantId) {
        this.registrantId = registrantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_share_quality")
    public DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum screenShareQuality;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withScreenShareQuality(DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum screenShareQuality) {
        this.screenShareQuality = screenShareQuality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_application")
    public Boolean shareApplication;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withShareApplication(Boolean shareApplication) {
        this.shareApplication = shareApplication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_desktop")
    public Boolean shareDesktop;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withShareDesktop(Boolean shareDesktop) {
        this.shareDesktop = shareDesktop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_whiteboard")
    public Boolean shareWhiteboard;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withShareWhiteboard(Boolean shareWhiteboard) {
        this.shareWhiteboard = shareWhiteboard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker")
    public String speaker;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withSpeaker(String speaker) {
        this.speaker = speaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum status;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withStatus(DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_quality")
    public DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum videoQuality;
    public DashboardMeetingParticipants200ApplicationJsonParticipants withVideoQuality(DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum videoQuality) {
        this.videoQuality = videoQuality;
        return this;
    }
}