package openapisdk.models.shared;


public enum CustomObjectDefinitionSchemaRelationshipsCardinalityEnum {
    MANY_TO_ONE("manyToOne"),
    ONE_TO_MANY("oneToMany");

    public final String value;

    private CustomObjectDefinitionSchemaRelationshipsCardinalityEnum(String value) {
        this.value = value;
    }
}
