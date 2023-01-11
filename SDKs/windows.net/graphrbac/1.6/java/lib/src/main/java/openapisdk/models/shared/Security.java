package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeAzureAuth azureAuth;
    public Security withAzureAuth(SchemeAzureAuth azureAuth) {
        this.azureAuth = azureAuth;
        return this;
    }
}