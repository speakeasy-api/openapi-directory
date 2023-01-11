package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountPlans200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_audio")
    public AccountPlans200ApplicationJsonPlanAudio planAudio;
    public AccountPlans200ApplicationJson withPlanAudio(AccountPlans200ApplicationJsonPlanAudio planAudio) {
        this.planAudio = planAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlans200ApplicationJsonPlanBase planBase;
    public AccountPlans200ApplicationJson withPlanBase(AccountPlans200ApplicationJsonPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_large_meeting")
    public AccountPlans200ApplicationJsonPlanLargeMeeting[] planLargeMeeting;
    public AccountPlans200ApplicationJson withPlanLargeMeeting(AccountPlans200ApplicationJsonPlanLargeMeeting[] planLargeMeeting) {
        this.planLargeMeeting = planLargeMeeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_phone")
    public AccountPlans200ApplicationJsonPhonePlan planPhone;
    public AccountPlans200ApplicationJson withPlanPhone(AccountPlans200ApplicationJsonPhonePlan planPhone) {
        this.planPhone = planPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording")
    public String planRecording;
    public AccountPlans200ApplicationJson withPlanRecording(String planRecording) {
        this.planRecording = planRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording_next_invoice_date")
    public String planRecordingNextInvoiceDate;
    public AccountPlans200ApplicationJson withPlanRecordingNextInvoiceDate(String planRecordingNextInvoiceDate) {
        this.planRecordingNextInvoiceDate = planRecordingNextInvoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording_service_effective_date")
    public String planRecordingServiceEffectiveDate;
    public AccountPlans200ApplicationJson withPlanRecordingServiceEffectiveDate(String planRecordingServiceEffectiveDate) {
        this.planRecordingServiceEffectiveDate = planRecordingServiceEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_recording_status")
    public AccountPlans200ApplicationJsonPlanRecordingStatusEnum planRecordingStatus;
    public AccountPlans200ApplicationJson withPlanRecordingStatus(AccountPlans200ApplicationJsonPlanRecordingStatusEnum planRecordingStatus) {
        this.planRecordingStatus = planRecordingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_room_connector")
    public AccountPlans200ApplicationJsonPlanRoomConnector planRoomConnector;
    public AccountPlans200ApplicationJson withPlanRoomConnector(AccountPlans200ApplicationJsonPlanRoomConnector planRoomConnector) {
        this.planRoomConnector = planRoomConnector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_webinar")
    public AccountPlans200ApplicationJsonPlanWebinar[] planWebinar;
    public AccountPlans200ApplicationJson withPlanWebinar(AccountPlans200ApplicationJsonPlanWebinar[] planWebinar) {
        this.planWebinar = planWebinar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_zoom_rooms")
    public AccountPlans200ApplicationJsonPlanZoomRooms planZoomRooms;
    public AccountPlans200ApplicationJson withPlanZoomRooms(AccountPlans200ApplicationJsonPlanZoomRooms planZoomRooms) {
        this.planZoomRooms = planZoomRooms;
        return this;
    }
}