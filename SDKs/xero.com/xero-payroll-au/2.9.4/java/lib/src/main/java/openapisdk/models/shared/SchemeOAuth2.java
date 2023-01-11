package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOAuth2 {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOAuth2 withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}