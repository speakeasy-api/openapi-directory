package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings {
    @SpeakeasyMetadata("multipartForm:name=meeting_security,json")
    public AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettings withMeetingSecurity(AccountSettingsUpdateMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}