package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoleMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public CreateRoleMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public CreateRoleMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=privileges,json")
    public String[] privileges;
    public CreateRoleMultipartFormData withPrivileges(String[] privileges) {
        this.privileges = privileges;
        return this;
    }
}