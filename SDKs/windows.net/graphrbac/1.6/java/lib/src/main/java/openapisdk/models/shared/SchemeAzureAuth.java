package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAzureAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeAzureAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}