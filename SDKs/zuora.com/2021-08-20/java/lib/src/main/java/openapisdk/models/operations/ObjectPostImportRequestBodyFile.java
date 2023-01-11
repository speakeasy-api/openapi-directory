package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostImportRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:name=File")
    public String file;
    public ObjectPostImportRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ObjectPostImportRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}