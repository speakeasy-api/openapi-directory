package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserSettingSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public AddUserSettingSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}