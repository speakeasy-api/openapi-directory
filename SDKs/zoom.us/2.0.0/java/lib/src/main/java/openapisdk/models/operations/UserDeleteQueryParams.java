package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public UserDeleteActionEnum action;
    public UserDeleteQueryParams withAction(UserDeleteActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transfer_email")
    public String transferEmail;
    public UserDeleteQueryParams withTransferEmail(String transferEmail) {
        this.transferEmail = transferEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transfer_meeting")
    public Boolean transferMeeting;
    public UserDeleteQueryParams withTransferMeeting(Boolean transferMeeting) {
        this.transferMeeting = transferMeeting;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transfer_recording")
    public Boolean transferRecording;
    public UserDeleteQueryParams withTransferRecording(Boolean transferRecording) {
        this.transferRecording = transferRecording;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transfer_webinar")
    public Boolean transferWebinar;
    public UserDeleteQueryParams withTransferWebinar(Boolean transferWebinar) {
        this.transferWebinar = transferWebinar;
        return this;
    }
}