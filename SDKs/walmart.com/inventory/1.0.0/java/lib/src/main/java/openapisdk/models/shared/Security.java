package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public SchemeBasicScheme basicScheme;
    public Security withBasicScheme(SchemeBasicScheme basicScheme) {
        this.basicScheme = basicScheme;
        return this;
    }
}