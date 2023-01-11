package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality {
    @JsonProperty("equalToXml")
    public String equalToXml;
    public PostAdminMappingsRemoveByMetadataRequestBodyXmlEquality withEqualToXml(String equalToXml) {
        this.equalToXml = equalToXml;
        return this;
    }
}