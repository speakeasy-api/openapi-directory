package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountPlanCreateMultipartFormData1
 * Account Plans object.
**/
public class AccountPlanCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=contact,json")
    public AccountPlanCreateMultipartFormDataContact contact;
    public AccountPlanCreateMultipartFormData1 withContact(AccountPlanCreateMultipartFormDataContact contact) {
        this.contact = contact;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_audio,json")
    public AccountPlanCreateMultipartFormDataPlanAudio planAudio;
    public AccountPlanCreateMultipartFormData1 withPlanAudio(AccountPlanCreateMultipartFormDataPlanAudio planAudio) {
        this.planAudio = planAudio;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_base,json")
    public AccountPlanCreateMultipartFormDataPlanBase planBase;
    public AccountPlanCreateMultipartFormData1 withPlanBase(AccountPlanCreateMultipartFormDataPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_large_meeting,json")
    public AccountPlanCreateMultipartFormDataPlanLargeMeeting[] planLargeMeeting;
    public AccountPlanCreateMultipartFormData1 withPlanLargeMeeting(AccountPlanCreateMultipartFormDataPlanLargeMeeting[] planLargeMeeting) {
        this.planLargeMeeting = planLargeMeeting;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_phone,json")
    public AccountPlanCreateMultipartFormDataPhonePlan planPhone;
    public AccountPlanCreateMultipartFormData1 withPlanPhone(AccountPlanCreateMultipartFormDataPhonePlan planPhone) {
        this.planPhone = planPhone;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_recording")
    public String planRecording;
    public AccountPlanCreateMultipartFormData1 withPlanRecording(String planRecording) {
        this.planRecording = planRecording;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_room_connector,json")
    public AccountPlanCreateMultipartFormDataPlanRoomConnector planRoomConnector;
    public AccountPlanCreateMultipartFormData1 withPlanRoomConnector(AccountPlanCreateMultipartFormDataPlanRoomConnector planRoomConnector) {
        this.planRoomConnector = planRoomConnector;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_webinar,json")
    public AccountPlanCreateMultipartFormDataPlanWebinar[] planWebinar;
    public AccountPlanCreateMultipartFormData1 withPlanWebinar(AccountPlanCreateMultipartFormDataPlanWebinar[] planWebinar) {
        this.planWebinar = planWebinar;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=plan_zoom_rooms,json")
    public AccountPlanCreateMultipartFormDataPlanZoomRooms planZoomRooms;
    public AccountPlanCreateMultipartFormData1 withPlanZoomRooms(AccountPlanCreateMultipartFormDataPlanZoomRooms planZoomRooms) {
        this.planZoomRooms = planZoomRooms;
        return this;
    }
}