package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PvContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public PvContract withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public Integer createdBy;
    public PvContract withCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public PvContract withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedMetadata")
    public PvExtendedMetadata extendedMetadata;
    public PvContract withExtendedMetadata(PvExtendedMetadata extendedMetadata) {
        this.extendedMetadata = extendedMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public PvContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Integer length;
    public PvContract withLength(Integer length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PvContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishDate")
    public OffsetDateTime publishDate;
    public PvContract withPublishDate(OffsetDateTime publishDate) {
        this.publishDate = publishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvId")
    public String pvId;
    public PvContract withPvId(String pvId) {
        this.pvId = pvId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvType")
    public PvContractPvTypeEnum pvType;
    public PvContract withPvType(PvContractPvTypeEnum pvType) {
        this.pvType = pvType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public PvContractServiceEnum service;
    public PvContract withService(PvContractServiceEnum service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbUrl")
    public String thumbUrl;
    public PvContract withThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PvContract withUrl(String url) {
        this.url = url;
        return this;
    }
}