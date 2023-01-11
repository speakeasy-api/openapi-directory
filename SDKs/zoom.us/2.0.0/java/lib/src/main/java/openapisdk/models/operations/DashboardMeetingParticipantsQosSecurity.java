package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantsQosSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public DashboardMeetingParticipantsQosSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}