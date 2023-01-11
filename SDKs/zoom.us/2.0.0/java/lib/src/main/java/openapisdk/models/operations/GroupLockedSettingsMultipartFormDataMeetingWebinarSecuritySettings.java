package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings {
    @SpeakeasyMetadata("multipartForm:name=meeting_security,json")
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity;
    public GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettings withMeetingSecurity(GroupLockedSettingsMultipartFormDataMeetingWebinarSecuritySettingsMeetingSecurity meetingSecurity) {
        this.meetingSecurity = meetingSecurity;
        return this;
    }
}