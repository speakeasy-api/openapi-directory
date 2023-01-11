package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountManagedDomainSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth oAuth;
    public AccountManagedDomainSecurity withOAuth(openapisdk.models.shared.SchemeOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
}