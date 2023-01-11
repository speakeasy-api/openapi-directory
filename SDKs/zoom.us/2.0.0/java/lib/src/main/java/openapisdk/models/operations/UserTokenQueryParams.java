package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTokenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ttl")
    public Long ttl;
    public UserTokenQueryParams withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public UserTokenTypeEnum type;
    public UserTokenQueryParams withType(UserTokenTypeEnum type) {
        this.type = type;
        return this;
    }
}