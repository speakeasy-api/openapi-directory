package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=login_type")
    public UserUpdateLoginTypeEnum loginType;
    public UserUpdateQueryParams withLoginType(UserUpdateLoginTypeEnum loginType) {
        this.loginType = loginType;
        return this;
    }
}