package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardClientFeedbackDetailSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public DashboardClientFeedbackDetailSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}