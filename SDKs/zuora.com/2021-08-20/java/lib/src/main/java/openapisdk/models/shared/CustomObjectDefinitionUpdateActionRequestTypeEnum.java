package openapisdk.models.shared;


public enum CustomObjectDefinitionUpdateActionRequestTypeEnum {
    ADD_FIELD("addField"),
    DELETE_FIELD("deleteField"),
    UPDATE_FIELD("updateField"),
    UPDATE_OBJECT("updateObject"),
    RENAME_FIELD("renameField"),
    ADD_RELATIONSHIP("addRelationship"),
    DELETE_RELATIONSHIP("deleteRelationship");

    public final String value;

    private CustomObjectDefinitionUpdateActionRequestTypeEnum(String value) {
        this.value = value;
    }
}
