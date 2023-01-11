package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreate201ApplicationJson
 * Account Plans object.
**/
public class AccountPlanCreate201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_audio")
    public AccountPlanCreate201ApplicationJsonPlanAudio planAudio;
    public AccountPlanCreate201ApplicationJson withPlanAudio(AccountPlanCreate201ApplicationJsonPlanAudio planAudio) {
        this.planAudio = planAudio;
        return this;
    }
    @JsonProperty("plan_base")
    public AccountPlanCreate201ApplicationJsonPlanBase planBase;
    public AccountPlanCreate201ApplicationJson withPlanBase(AccountPlanCreate201ApplicationJsonPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_large_meeting")
    public AccountPlanCreate201ApplicationJsonPlanLargeMeeting[] planLargeMeeting;
    public AccountPlanCreate201ApplicationJson withPlanLargeMeeting(AccountPlanCreate201ApplicationJsonPlanLargeMeeting[] planLargeMeeting) {
        this.planLargeMeeting = planLargeMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_phone")
    public AccountPlanCreate201ApplicationJsonPhonePlan planPhone;
    public AccountPlanCreate201ApplicationJson withPlanPhone(AccountPlanCreate201ApplicationJsonPhonePlan planPhone) {
        this.planPhone = planPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording")
    public String planRecording;
    public AccountPlanCreate201ApplicationJson withPlanRecording(String planRecording) {
        this.planRecording = planRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_room_connector")
    public AccountPlanCreate201ApplicationJsonPlanRoomConnector planRoomConnector;
    public AccountPlanCreate201ApplicationJson withPlanRoomConnector(AccountPlanCreate201ApplicationJsonPlanRoomConnector planRoomConnector) {
        this.planRoomConnector = planRoomConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_webinar")
    public AccountPlanCreate201ApplicationJsonPlanWebinar[] planWebinar;
    public AccountPlanCreate201ApplicationJson withPlanWebinar(AccountPlanCreate201ApplicationJsonPlanWebinar[] planWebinar) {
        this.planWebinar = planWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_zoom_rooms")
    public AccountPlanCreate201ApplicationJsonPlanZoomRooms planZoomRooms;
    public AccountPlanCreate201ApplicationJson withPlanZoomRooms(AccountPlanCreate201ApplicationJsonPlanZoomRooms planZoomRooms) {
        this.planZoomRooms = planZoomRooms;
        return this;
    }
}