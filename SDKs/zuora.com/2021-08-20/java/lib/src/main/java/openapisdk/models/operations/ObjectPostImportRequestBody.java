package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostImportRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ObjectPostImportRequestBodyFile file;
    public ObjectPostImportRequestBody withFile(ObjectPostImportRequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ImportType")
    public ObjectPostImportRequestBodyImportTypeEnum importType;
    public ObjectPostImportRequestBody withImportType(ObjectPostImportRequestBodyImportTypeEnum importType) {
        this.importType = importType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=Name")
    public String name;
    public ObjectPostImportRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}