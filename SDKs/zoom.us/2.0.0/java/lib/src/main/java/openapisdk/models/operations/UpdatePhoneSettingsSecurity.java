package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSettingsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public UpdatePhoneSettingsSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}