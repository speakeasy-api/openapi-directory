package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=login_type")
    public UserLoginTypeEnum loginType;
    public UserQueryParams withLoginType(UserLoginTypeEnum loginType) {
        this.loginType = loginType;
        return this;
    }
}