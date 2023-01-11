package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardZoomRoomZoomRoom
 * Zoom room.
**/
public class DashboardZoomRoomZoomRoom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_type")
    public String accountType;
    public DashboardZoomRoomZoomRoom withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calender_name")
    public String calenderName;
    public DashboardZoomRoomZoomRoom withCalenderName(String calenderName) {
        this.calenderName = calenderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("camera")
    public String camera;
    public DashboardZoomRoomZoomRoom withCamera(String camera) {
        this.camera = camera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_ip")
    public String deviceIp;
    public DashboardZoomRoomZoomRoom withDeviceIp(String deviceIp) {
        this.deviceIp = deviceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardZoomRoomZoomRoom withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public String health;
    public DashboardZoomRoomZoomRoom withHealth(String health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DashboardZoomRoomZoomRoom withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public String[] issues;
    public DashboardZoomRoomZoomRoom withIssues(String[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_start_time")
    public String lastStartTime;
    public DashboardZoomRoomZoomRoom withLastStartTime(String lastStartTime) {
        this.lastStartTime = lastStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_meeting")
    public DashboardZoomRoomZoomRoomMeetingMetrics liveMeeting;
    public DashboardZoomRoomZoomRoom withLiveMeeting(DashboardZoomRoomZoomRoomMeetingMetrics liveMeeting) {
        this.liveMeeting = liveMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public DashboardZoomRoomZoomRoom withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microphone")
    public String microphone;
    public DashboardZoomRoomZoomRoom withMicrophone(String microphone) {
        this.microphone = microphone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("past_meetings")
    public DashboardZoomRoomZoomRoomPastMeetings pastMeetings;
    public DashboardZoomRoomZoomRoom withPastMeetings(DashboardZoomRoomZoomRoomPastMeetings pastMeetings) {
        this.pastMeetings = pastMeetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_name")
    public String roomName;
    public DashboardZoomRoomZoomRoom withRoomName(String roomName) {
        this.roomName = roomName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker")
    public String speaker;
    public DashboardZoomRoomZoomRoom withSpeaker(String speaker) {
        this.speaker = speaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DashboardZoomRoomZoomRoom withStatus(String status) {
        this.status = status;
        return this;
    }
}