package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingInvitationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public MeetingInvitationSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}