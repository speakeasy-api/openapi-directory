package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}