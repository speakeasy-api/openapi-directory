package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRecordingRegistrantCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public MeetingRecordingRegistrantCreateSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}