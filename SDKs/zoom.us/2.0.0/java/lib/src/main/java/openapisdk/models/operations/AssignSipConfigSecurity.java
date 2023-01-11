package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipConfigSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public AssignSipConfigSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}