package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeClientCredentials {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeClientCredentials withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}