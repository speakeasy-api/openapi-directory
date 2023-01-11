package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideoFromProjectSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public RemoveVideoFromProjectSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}