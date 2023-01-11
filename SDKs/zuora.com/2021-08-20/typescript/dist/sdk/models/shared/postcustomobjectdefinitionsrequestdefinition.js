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
exports.PostCustomObjectDefinitionsRequestDefinition = exports.PostCustomObjectDefinitionsRequestDefinitionRelationships = exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints = exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate = exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var postcustomobjectdefinitionfielddefinitionrequest_1 = require("./postcustomobjectdefinitionfielddefinitionrequest");
var PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum;
(function (PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum) {
    PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum["ManyToOne"] = "manyToOne";
})(PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum = exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum || (exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsCardinalityEnum = {}));
var PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate = /** @class */ (function (_super) {
    __extends(PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate, _super);
    function PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforceValidMapping" }),
        __metadata("design:type", Boolean)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate.prototype, "enforceValidMapping", void 0);
    return PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate = PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate;
// PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints
/**
 * Specifies contraints to apply to custom object records.
 *
**/
var PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints = /** @class */ (function (_super) {
    __extends(PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints, _super);
    function PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create" }),
        __metadata("design:type", PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints.prototype, "create", void 0);
    return PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints = PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints;
var PostCustomObjectDefinitionsRequestDefinitionRelationships = /** @class */ (function (_super) {
    __extends(PostCustomObjectDefinitionsRequestDefinitionRelationships, _super);
    function PostCustomObjectDefinitionsRequestDefinitionRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardinality" }),
        __metadata("design:type", String)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationships.prototype, "cardinality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields" }),
        __metadata("design:type", Object)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationships.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationships.prototype, "namespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationships.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordConstraints" }),
        __metadata("design:type", PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints)
    ], PostCustomObjectDefinitionsRequestDefinitionRelationships.prototype, "recordConstraints", void 0);
    return PostCustomObjectDefinitionsRequestDefinitionRelationships;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectDefinitionsRequestDefinitionRelationships = PostCustomObjectDefinitionsRequestDefinitionRelationships;
var PostCustomObjectDefinitionsRequestDefinition = /** @class */ (function (_super) {
    __extends(PostCustomObjectDefinitionsRequestDefinition, _super);
    function PostCustomObjectDefinitionsRequestDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filterable" }),
        __metadata("design:type", Array)
    ], PostCustomObjectDefinitionsRequestDefinition.prototype, "filterable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PostCustomObjectDefinitionsRequestDefinition.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], PostCustomObjectDefinitionsRequestDefinition.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties", elemType: postcustomobjectdefinitionfielddefinitionrequest_1.PostCustomObjectDefinitionFieldDefinitionRequest }),
        __metadata("design:type", Object)
    ], PostCustomObjectDefinitionsRequestDefinition.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships", elemType: PostCustomObjectDefinitionsRequestDefinitionRelationships }),
        __metadata("design:type", Array)
    ], PostCustomObjectDefinitionsRequestDefinition.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Array)
    ], PostCustomObjectDefinitionsRequestDefinition.prototype, "required", void 0);
    return PostCustomObjectDefinitionsRequestDefinition;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectDefinitionsRequestDefinition = PostCustomObjectDefinitionsRequestDefinition;
