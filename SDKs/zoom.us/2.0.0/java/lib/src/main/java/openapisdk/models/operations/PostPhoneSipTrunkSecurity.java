package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPhoneSipTrunkSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public PostPhoneSipTrunkSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}