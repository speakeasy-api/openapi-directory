package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeZoomRoomsAppVersionMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public ChangeZoomRoomsAppVersionMultipartFormDataActionEnum action;
    public ChangeZoomRoomsAppVersionMultipartFormData withAction(ChangeZoomRoomsAppVersionMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
}