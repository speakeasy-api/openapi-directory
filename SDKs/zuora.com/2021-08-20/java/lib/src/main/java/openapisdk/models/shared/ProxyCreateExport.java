package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyCreateExport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConvertToCurrencies")
    public String convertToCurrencies;
    public ProxyCreateExport withConvertToCurrencies(String convertToCurrencies) {
        this.convertToCurrencies = convertToCurrencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public ProxyCreateExport withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileId")
    public String fileId;
    public ProxyCreateExport withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonProperty("Format")
    public ProxyCreateExportFormatEnum format;
    public ProxyCreateExport withFormat(ProxyCreateExportFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProxyCreateExport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Query")
    public String query;
    public ProxyCreateExport withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Integer size;
    public ProxyCreateExport withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public ProxyCreateExport withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public ProxyCreateExport withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zip")
    public Boolean zip;
    public ProxyCreateExport withZip(Boolean zip) {
        this.zip = zip;
        return this;
    }
}