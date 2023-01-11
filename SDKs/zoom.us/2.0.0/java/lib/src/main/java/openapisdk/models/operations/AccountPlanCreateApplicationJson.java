package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateApplicationJson
 * Account Plans object.
**/
public class AccountPlanCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public AccountPlanCreateApplicationJsonContact contact;
    public AccountPlanCreateApplicationJson withContact(AccountPlanCreateApplicationJsonContact contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_audio")
    public AccountPlanCreateApplicationJsonPlanAudio planAudio;
    public AccountPlanCreateApplicationJson withPlanAudio(AccountPlanCreateApplicationJsonPlanAudio planAudio) {
        this.planAudio = planAudio;
        return this;
    }
    @JsonProperty("plan_base")
    public AccountPlanCreateApplicationJsonPlanBase planBase;
    public AccountPlanCreateApplicationJson withPlanBase(AccountPlanCreateApplicationJsonPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_large_meeting")
    public AccountPlanCreateApplicationJsonPlanLargeMeeting[] planLargeMeeting;
    public AccountPlanCreateApplicationJson withPlanLargeMeeting(AccountPlanCreateApplicationJsonPlanLargeMeeting[] planLargeMeeting) {
        this.planLargeMeeting = planLargeMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_phone")
    public AccountPlanCreateApplicationJsonPhonePlan planPhone;
    public AccountPlanCreateApplicationJson withPlanPhone(AccountPlanCreateApplicationJsonPhonePlan planPhone) {
        this.planPhone = planPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording")
    public String planRecording;
    public AccountPlanCreateApplicationJson withPlanRecording(String planRecording) {
        this.planRecording = planRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_room_connector")
    public AccountPlanCreateApplicationJsonPlanRoomConnector planRoomConnector;
    public AccountPlanCreateApplicationJson withPlanRoomConnector(AccountPlanCreateApplicationJsonPlanRoomConnector planRoomConnector) {
        this.planRoomConnector = planRoomConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_webinar")
    public AccountPlanCreateApplicationJsonPlanWebinar[] planWebinar;
    public AccountPlanCreateApplicationJson withPlanWebinar(AccountPlanCreateApplicationJsonPlanWebinar[] planWebinar) {
        this.planWebinar = planWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_zoom_rooms")
    public AccountPlanCreateApplicationJsonPlanZoomRooms planZoomRooms;
    public AccountPlanCreateApplicationJson withPlanZoomRooms(AccountPlanCreateApplicationJsonPlanZoomRooms planZoomRooms) {
        this.planZoomRooms = planZoomRooms;
        return this;
    }
}