package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserCreateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public UserCreateMultipartFormDataActionEnum action;
    public UserCreateMultipartFormData withAction(UserCreateMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_info,json")
    public UserCreateMultipartFormDataUserInfo userInfo;
    public UserCreateMultipartFormData withUserInfo(UserCreateMultipartFormDataUserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}