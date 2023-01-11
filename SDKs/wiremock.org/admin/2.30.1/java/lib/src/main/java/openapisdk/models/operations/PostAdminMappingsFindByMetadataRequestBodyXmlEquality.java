package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsFindByMetadataRequestBodyXmlEquality {
    @JsonProperty("equalToXml")
    public String equalToXml;
    public PostAdminMappingsFindByMetadataRequestBodyXmlEquality withEqualToXml(String equalToXml) {
        this.equalToXml = equalToXml;
        return this;
    }
}