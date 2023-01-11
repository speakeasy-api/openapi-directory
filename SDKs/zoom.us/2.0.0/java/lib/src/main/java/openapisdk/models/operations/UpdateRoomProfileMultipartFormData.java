package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomProfileMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=basic,json")
    public UpdateRoomProfileMultipartFormDataBasic basic;
    public UpdateRoomProfileMultipartFormData withBasic(UpdateRoomProfileMultipartFormDataBasic basic) {
        this.basic = basic;
        return this;
    }
}