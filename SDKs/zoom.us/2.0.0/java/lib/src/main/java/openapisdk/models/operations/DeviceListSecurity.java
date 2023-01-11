package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeviceListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public DeviceListSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}