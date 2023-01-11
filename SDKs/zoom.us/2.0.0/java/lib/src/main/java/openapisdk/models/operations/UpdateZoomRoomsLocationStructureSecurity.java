package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZoomRoomsLocationStructureSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public UpdateZoomRoomsLocationStructureSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}