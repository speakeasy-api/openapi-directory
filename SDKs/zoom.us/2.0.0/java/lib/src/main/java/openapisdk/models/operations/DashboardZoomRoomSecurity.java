package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardZoomRoomSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public DashboardZoomRoomSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}