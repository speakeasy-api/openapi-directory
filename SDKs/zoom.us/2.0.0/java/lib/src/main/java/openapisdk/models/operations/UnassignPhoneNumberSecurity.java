package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignPhoneNumberSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public UnassignPhoneNumberSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}