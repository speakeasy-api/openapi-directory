import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Schema of any given field described in the `properties` field.
 */
export declare class SchemaPropertiesFieldName extends SpeakeasyBase {
    /**
     * Object containing the type of the items if the field is an array. Typically, arrays will contain strings and will be used for fields such as `email`.
     */
    items?: Record<string, any>;
    /**
     * Indicates whether property is Personal Identifiable Information.
     */
    pii: boolean;
    /**
     * Indicates whether property is sensitive data.
     */
    sensitive: boolean;
    /**
     * Schema property type.
     */
    type: string;
}
/**
 * Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and; `items.type` (if field is array).
 */
export declare class SchemaProperties extends SpeakeasyBase {
    /**
     * Schema of any given field described in the `properties` field.
     */
    fieldName?: SchemaPropertiesFieldName;
}
export declare class Schema extends SpeakeasyBase {
    /**
     * Schema's human readable description.
     */
    description: string;
    /**
     * Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted.
     */
    documentTTL?: number;
    /**
     * Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and; `items.type` (if field is array).
     */
    properties: SchemaProperties;
    /**
     * Schema required fields.
     */
    required: string[];
    /**
     * Schema title.
     */
    title: string;
    /**
     * Schema type.
     */
    type: string;
    vIndexed?: any[];
    vUnique?: any[];
    /**
     * Schema version.
     */
    version?: number;
}
