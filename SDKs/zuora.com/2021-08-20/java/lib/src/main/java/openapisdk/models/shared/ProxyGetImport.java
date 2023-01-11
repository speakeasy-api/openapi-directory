package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyGetImport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public ProxyGetImport withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public ProxyGetImport withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetImport withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportType")
    public String importType;
    public ProxyGetImport withImportType(String importType) {
        this.importType = importType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportedCount")
    public Integer importedCount;
    public ProxyGetImport withImportedCount(Integer importedCount) {
        this.importedCount = importedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Md5")
    public String md5;
    public ProxyGetImport withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProxyGetImport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginalResourceUrl")
    public String originalResourceUrl;
    public ProxyGetImport withOriginalResourceUrl(String originalResourceUrl) {
        this.originalResourceUrl = originalResourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultResourceUrl")
    public String resultResourceUrl;
    public ProxyGetImport withResultResourceUrl(String resultResourceUrl) {
        this.resultResourceUrl = resultResourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public ProxyGetImport withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public String statusReason;
    public ProxyGetImport withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Integer totalCount;
    public ProxyGetImport withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public ProxyGetImport withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public ProxyGetImport withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}