package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBasicScheme {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeBasicScheme withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeBasicScheme withUsername(String username) {
        this.username = username;
        return this;
    }
}