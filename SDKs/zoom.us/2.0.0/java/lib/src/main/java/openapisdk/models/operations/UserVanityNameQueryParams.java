package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserVanityNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vanity_name")
    public String vanityName;
    public UserVanityNameQueryParams withVanityName(String vanityName) {
        this.vanityName = vanityName;
        return this;
    }
}