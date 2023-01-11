package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckInRoomsMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=method")
    public String method;
    public CheckInRoomsMultipartFormData withMethod(String method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=params,json")
    public CheckInRoomsMultipartFormDataParams params;
    public CheckInRoomsMultipartFormData withParams(CheckInRoomsMultipartFormDataParams params) {
        this.params = params;
        return this;
    }
}