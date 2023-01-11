package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeCallQueueManagerSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public ChangeCallQueueManagerSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}