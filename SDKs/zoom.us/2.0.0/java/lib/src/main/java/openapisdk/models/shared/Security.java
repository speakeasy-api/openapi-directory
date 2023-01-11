package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeOAuth oAuth;
    public Security withOAuth(SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}