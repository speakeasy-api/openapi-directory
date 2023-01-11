package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardZoomRoomsZoomRoomListZoomRoom
 * Zoom room.
**/
public class DashboardZoomRoomsZoomRoomListZoomRoom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_type")
    public String accountType;
    public DashboardZoomRoomsZoomRoomListZoomRoom withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calender_name")
    public String calenderName;
    public DashboardZoomRoomsZoomRoomListZoomRoom withCalenderName(String calenderName) {
        this.calenderName = calenderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("camera")
    public String camera;
    public DashboardZoomRoomsZoomRoomListZoomRoom withCamera(String camera) {
        this.camera = camera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_ip")
    public String deviceIp;
    public DashboardZoomRoomsZoomRoomListZoomRoom withDeviceIp(String deviceIp) {
        this.deviceIp = deviceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardZoomRoomsZoomRoomListZoomRoom withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public String health;
    public DashboardZoomRoomsZoomRoomListZoomRoom withHealth(String health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DashboardZoomRoomsZoomRoomListZoomRoom withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public String[] issues;
    public DashboardZoomRoomsZoomRoomListZoomRoom withIssues(String[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_start_time")
    public String lastStartTime;
    public DashboardZoomRoomsZoomRoomListZoomRoom withLastStartTime(String lastStartTime) {
        this.lastStartTime = lastStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public DashboardZoomRoomsZoomRoomListZoomRoom withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microphone")
    public String microphone;
    public DashboardZoomRoomsZoomRoomListZoomRoom withMicrophone(String microphone) {
        this.microphone = microphone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_name")
    public String roomName;
    public DashboardZoomRoomsZoomRoomListZoomRoom withRoomName(String roomName) {
        this.roomName = roomName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker")
    public String speaker;
    public DashboardZoomRoomsZoomRoomListZoomRoom withSpeaker(String speaker) {
        this.speaker = speaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DashboardZoomRoomsZoomRoomListZoomRoom withStatus(String status) {
        this.status = status;
        return this;
    }
}