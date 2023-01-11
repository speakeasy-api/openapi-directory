"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomObjectDefinition = exports.CustomObjectDefinitionSchema = exports.CustomObjectDefinitionSchemaTypeEnum = exports.CustomObjectDefinitionSchemaRelationships = exports.CustomObjectDefinitionSchemaRelationshipsRecordConstraints = exports.CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate = exports.CustomObjectDefinitionSchemaRelationshipsCardinalityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var customobjectcustomfielddefinition_1 = require("./customobjectcustomfielddefinition");
var CustomObjectDefinitionSchemaRelationshipsCardinalityEnum;
(function (CustomObjectDefinitionSchemaRelationshipsCardinalityEnum) {
    CustomObjectDefinitionSchemaRelationshipsCardinalityEnum["ManyToOne"] = "manyToOne";
    CustomObjectDefinitionSchemaRelationshipsCardinalityEnum["OneToMany"] = "oneToMany";
})(CustomObjectDefinitionSchemaRelationshipsCardinalityEnum = exports.CustomObjectDefinitionSchemaRelationshipsCardinalityEnum || (exports.CustomObjectDefinitionSchemaRelationshipsCardinalityEnum = {}));
var CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate, _super);
    function CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforceValidMapping" }),
        __metadata("design:type", Boolean)
    ], CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate.prototype, "enforceValidMapping", void 0);
    return CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate = CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate;
// CustomObjectDefinitionSchemaRelationshipsRecordConstraints
/**
 * Specifies contraints to apply to custom object records.
 *
**/
var CustomObjectDefinitionSchemaRelationshipsRecordConstraints = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionSchemaRelationshipsRecordConstraints, _super);
    function CustomObjectDefinitionSchemaRelationshipsRecordConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create" }),
        __metadata("design:type", CustomObjectDefinitionSchemaRelationshipsRecordConstraintsCreate)
    ], CustomObjectDefinitionSchemaRelationshipsRecordConstraints.prototype, "create", void 0);
    return CustomObjectDefinitionSchemaRelationshipsRecordConstraints;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionSchemaRelationshipsRecordConstraints = CustomObjectDefinitionSchemaRelationshipsRecordConstraints;
var CustomObjectDefinitionSchemaRelationships = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionSchemaRelationships, _super);
    function CustomObjectDefinitionSchemaRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardinality" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionSchemaRelationships.prototype, "cardinality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields" }),
        __metadata("design:type", Object)
    ], CustomObjectDefinitionSchemaRelationships.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionSchemaRelationships.prototype, "namespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionSchemaRelationships.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordConstraints" }),
        __metadata("design:type", CustomObjectDefinitionSchemaRelationshipsRecordConstraints)
    ], CustomObjectDefinitionSchemaRelationships.prototype, "recordConstraints", void 0);
    return CustomObjectDefinitionSchemaRelationships;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionSchemaRelationships = CustomObjectDefinitionSchemaRelationships;
var CustomObjectDefinitionSchemaTypeEnum;
(function (CustomObjectDefinitionSchemaTypeEnum) {
    CustomObjectDefinitionSchemaTypeEnum["Object"] = "object";
})(CustomObjectDefinitionSchemaTypeEnum = exports.CustomObjectDefinitionSchemaTypeEnum || (exports.CustomObjectDefinitionSchemaTypeEnum = {}));
// CustomObjectDefinitionSchema
/**
 * The schema of the custom object definition
**/
var CustomObjectDefinitionSchema = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionSchema, _super);
    function CustomObjectDefinitionSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterable" }),
        __metadata("design:type", Array)
    ], CustomObjectDefinitionSchema.prototype, "filterable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionSchema.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionSchema.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties", elemType: customobjectcustomfielddefinition_1.CustomObjectCustomFieldDefinition }),
        __metadata("design:type", Object)
    ], CustomObjectDefinitionSchema.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships", elemType: CustomObjectDefinitionSchemaRelationships }),
        __metadata("design:type", Array)
    ], CustomObjectDefinitionSchema.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Array)
    ], CustomObjectDefinitionSchema.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionSchema.prototype, "type", void 0);
    return CustomObjectDefinitionSchema;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionSchema = CustomObjectDefinitionSchema;
var CustomObjectDefinition = /** @class */ (function (_super) {
    __extends(CustomObjectDefinition, _super);
    function CustomObjectDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], CustomObjectDefinition.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], CustomObjectDefinition.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], CustomObjectDefinition.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], CustomObjectDefinition.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], CustomObjectDefinition.prototype, "updatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", CustomObjectDefinitionSchema)
    ], CustomObjectDefinition.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomObjectDefinition.prototype, "type", void 0);
    return CustomObjectDefinition;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinition = CustomObjectDefinition;
