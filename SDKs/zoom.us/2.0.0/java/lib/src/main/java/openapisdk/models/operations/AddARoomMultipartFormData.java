package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddARoomMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=location_id")
    public String locationId;
    public AddARoomMultipartFormData withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public AddARoomMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public AddARoomMultipartFormDataTypeEnum type;
    public AddARoomMultipartFormData withType(AddARoomMultipartFormDataTypeEnum type) {
        this.type = type;
        return this;
    }
}