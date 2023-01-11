package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings {
    @SpeakeasyMetadata("multipartForm:name=meeting_security,json")
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings withMeetingSecurity(UserSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}