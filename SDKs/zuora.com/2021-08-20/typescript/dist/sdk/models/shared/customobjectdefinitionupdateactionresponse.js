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
exports.CustomObjectDefinitionUpdateActionResponse = exports.CustomObjectDefinitionUpdateActionResponseTypeEnum = exports.CustomObjectDefinitionUpdateActionResponseRelationship = exports.CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints = exports.CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate = exports.CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var updatecustomobjectcusotmfield_1 = require("./updatecustomobjectcusotmfield");
var CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum;
(function (CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum) {
    CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum["ManyToOne"] = "manyToOne";
    CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum["OneToMany"] = "oneToMany";
})(CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum = exports.CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum || (exports.CustomObjectDefinitionUpdateActionResponseRelationshipCardinalityEnum = {}));
var CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate, _super);
    function CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enforceValidMapping" }),
        __metadata("design:type", Boolean)
    ], CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate.prototype, "enforceValidMapping", void 0);
    return CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate = CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate;
// CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints
/**
 * Specifies contraints to apply to custom object records.
 *
**/
var CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints, _super);
    function CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=create" }),
        __metadata("design:type", CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate)
    ], CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints.prototype, "create", void 0);
    return CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints = CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints;
var CustomObjectDefinitionUpdateActionResponseRelationship = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionUpdateActionResponseRelationship, _super);
    function CustomObjectDefinitionUpdateActionResponseRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardinality" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponseRelationship.prototype, "cardinality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields" }),
        __metadata("design:type", Object)
    ], CustomObjectDefinitionUpdateActionResponseRelationship.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponseRelationship.prototype, "namespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponseRelationship.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordConstraints" }),
        __metadata("design:type", CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints)
    ], CustomObjectDefinitionUpdateActionResponseRelationship.prototype, "recordConstraints", void 0);
    return CustomObjectDefinitionUpdateActionResponseRelationship;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionUpdateActionResponseRelationship = CustomObjectDefinitionUpdateActionResponseRelationship;
var CustomObjectDefinitionUpdateActionResponseTypeEnum;
(function (CustomObjectDefinitionUpdateActionResponseTypeEnum) {
    CustomObjectDefinitionUpdateActionResponseTypeEnum["AddField"] = "addField";
    CustomObjectDefinitionUpdateActionResponseTypeEnum["DeleteField"] = "deleteField";
    CustomObjectDefinitionUpdateActionResponseTypeEnum["UpdateField"] = "updateField";
    CustomObjectDefinitionUpdateActionResponseTypeEnum["UpdateObject"] = "updateObject";
    CustomObjectDefinitionUpdateActionResponseTypeEnum["RenameField"] = "renameField";
    CustomObjectDefinitionUpdateActionResponseTypeEnum["AddRelationship"] = "addRelationship";
    CustomObjectDefinitionUpdateActionResponseTypeEnum["DeleteRelationship"] = "deleteRelationship";
})(CustomObjectDefinitionUpdateActionResponseTypeEnum = exports.CustomObjectDefinitionUpdateActionResponseTypeEnum || (exports.CustomObjectDefinitionUpdateActionResponseTypeEnum = {}));
var CustomObjectDefinitionUpdateActionResponse = /** @class */ (function (_super) {
    __extends(CustomObjectDefinitionUpdateActionResponse, _super);
    function CustomObjectDefinitionUpdateActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", updatecustomobjectcusotmfield_1.UpdateCustomObjectCusotmField)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "namespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationship" }),
        __metadata("design:type", CustomObjectDefinitionUpdateActionResponseRelationship)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "relationship", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomObjectDefinitionUpdateActionResponse.prototype, "type", void 0);
    return CustomObjectDefinitionUpdateActionResponse;
}(utils_1.SpeakeasyBase));
exports.CustomObjectDefinitionUpdateActionResponse = CustomObjectDefinitionUpdateActionResponse;
