package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings {
    @SpeakeasyMetadata("multipartForm:name=meeting_security,json")
    public UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettings withMeetingSecurity(UpdateGroupSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}