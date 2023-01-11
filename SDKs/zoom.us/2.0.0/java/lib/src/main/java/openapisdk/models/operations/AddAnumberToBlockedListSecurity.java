package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAnumberToBlockedListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public AddAnumberToBlockedListSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}