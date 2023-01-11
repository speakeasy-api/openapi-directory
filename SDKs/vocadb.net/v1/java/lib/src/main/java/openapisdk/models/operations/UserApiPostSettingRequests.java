package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostSettingRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String string;
    public UserApiPostSettingRequests withString(String string) {
        this.string = string;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public String string1;
    public UserApiPostSettingRequests withString1(String string1) {
        this.string1 = string1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public String string2;
    public UserApiPostSettingRequests withString2(String string2) {
        this.string2 = string2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public String string3;
    public UserApiPostSettingRequests withString3(String string3) {
        this.string3 = string3;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public String string4;
    public UserApiPostSettingRequests withString4(String string4) {
        this.string4 = string4;
        return this;
    }
}